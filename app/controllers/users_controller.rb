class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    unless @user.synced
      sync(@user)
      @user.synced = true
      @user.save
    end

    lang_objects = get_language_objects(@user)
    language_hashes = get_language_hashes(lang_objects)
    language_total = get_master_language_hash(language_hashes)
    binding.pry
    gon.languages = language_total

  end

  private


  def sync(user)
    repos = client.user("#{user.gitname}").rels[:repos].get.data

    repos.each do |repo|

      new_repo = Repository.find_or_initialize_by(rid: repo[:id])
      new_repo.name = repo[:name]
      new_repo.full_name = repo[:full_name]

      if new_repo.save
        puts "#{new_repo} saved"
      end

      repo_collaborators = repo.rels[:collaborators].get.data
      repo_collaborators.each do |collaborator|

        if collaborator[:id] != @user.uid

          new_user = User.find_or_initialize_by(uid: collaborator[:id].to_s)
          new_user.gitname = collaborator[:login]
          new_user.provider = "github"
          new_user.name = collaborator[:name]
          new_user.git_avatar = collaborator[:avatar_url]

          if new_user.save
            puts "#{new_user.name} saved"
          end
        end

        new_collaboration = Collaboration.find_or_initialize_by(
          repository_id: Repository.find_by(rid: repo[:id]).id,
          user_id: User.find_by(uid: collaborator[:id].to_s).id
          )
        if new_collaboration.save
          puts "collaboration saved"
        end
        @user.synced = true
      end
    end
  end

  def get_language_objects(user)
    language_objects = []

    user.repositories.each do |repo|
      language_objects << client.repository("#{repo.full_name}").rels[:languages].get.data
    end

    language_objects
  end

  def get_language_hashes(lang_objects)
    language_data = []

    lang_objects.each do |lang|
      language_data << lang.as_json
    end
  end

  def get_master_language_hash(language_hashes)
    languages_total = {}

    language_hashes.each do |language_hash|
      language_hash.as_json.each do |lang, count|
        if languages_total[lang].nil?
          languages_total[lang] = count
        else
          languages_total[lang] += count
        end
      end
    end

    languages_total
  end

end
