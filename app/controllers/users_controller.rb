class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    repos = client.user("#{@user.gitname}").rels[:repos].get.data

    repo_names = []
    collaborators_data = []
    collaborators_names = []

    repos.each do |repo|

      new_repo = Repository.find_or_initialize_by(rid: repo[:id])
      new_repo.name = repo[:name]
      new_repo.full_name = repo[:full_name]

      if new_repo.save
        puts "#{new_repo} saved"
      end

      repo_names << repo["name"]
      repo_collaborators = repo.rels[:collaborators].get.data
      repo_collaborators.each do |collaborator|
        if collaborator[:id] != @user.uid
          collaborators_names << collaborator[:login]
          new_user = User.find_or_initialize_by(uid: collaborator[:id].to_s)
          new_user.gitname = collaborator[:login]
          new_user.provider = "github"
          new_user.name = collaborator[:name]

          if new_user.save
            puts "#{new_user.name} saved"
          end
        end
      end
    end

    @repo_names = repo_names
    @collaborator_names = collaborators_names.uniq!
  end
end
