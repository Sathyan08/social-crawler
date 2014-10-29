class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    unless @user.synced
      get_data(@user)
      @user.synced = true
      @user.save
    end

    binding.pry
  end

  private

  def get_data(user)
    repos = get_repos(user)
    repos.as_json.each do |repo|
      save_repo(repo)
      save_collaborators(repo)
      repo_languages = get_language_data(repo)
      save_language_data(repo_languages, repo)
    end
  end

  def get_repos(user)
    repos_owned = client.user(user.gitname).rels[:repos].get.data
    repos_subscribed = client.user(user.gitname).rels[:subscriptions].get.data
    repos_starred = client.user(user.gitname).rels[:starred].get.data

    repos_owned + repos_subscribed + repos_starred
  end

  def save_repo(repo)
    new_repo = Repository.find_or_initialize_by(rid: repo["id"])
    new_repo.name = repo["name"]
    new_repo.full_name = repo["full_name"]

    if new_repo.save
      puts "#{new_repo.name} saved"
    end
  end



  def save_collaborators(repo)
    repo_collaborators = client.repository(repo["full_name"]).rels[:collaborators].get.data
    repo_collaborators.each do |collaborator|

      if collaborator[:id] != @user.uid

        new_user = User.find_or_initialize_by(uid: collaborator["id"].to_s)
        new_user.gitname = collaborator["login"]
        new_user.provider = "github"
        new_user.name = collaborator["name"]
        new_user.git_avatar = collaborator["avatar_url"]

        if new_user.save
          puts "#{new_user.name} saved"
        end

        new_collaboration = Collaboration.find_or_initialize_by(
          repository_id: Repository.find_by(rid: repo["id"]).id,
          user_id: User.find_by(uid: collaborator[:id].to_s).id
          )
        if new_collaboration.save
          puts "collaboration saved"
        end
      end
    end
  end

  def get_language_data(repo)
    language_data = {}

    repo_languages = client.repository(repo["full_name"]).rels[:languages].get.data
    repo_languages.as_json.each do |lang, count|
      if language_data[lang].nil?
        language_data[lang] = count
      else
        language_data[lang] += count
      end
    end

    language_data
  end

  def save_language_data(repo_languages, repo)
    current_repo = Repository.find_by(rid: repo["id"])

    repo_languages.each do |lang, count|
      language = Language.find_or_initialize_by(name: lang)

      if language.save
        puts "#{language.name} saved"
      end

      language_listing = LanguageListing.find_or_initialize_by(
        language_id: language.id,
        repository_id: current_repo.id
      )

      language_listing.count = count

      if language_listing.save
        puts "#{language_listing} saved!"
      end
    end
  end
end
