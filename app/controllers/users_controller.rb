class UsersController < ApplicationController

  def show
    @user = current_user
    data_total = Octokit.user "#{current_user.gitname}"
    repos = data_total.rels[:repos].get.data

    repo_names = []
    collaborators_data = []
    collaborators_names = []

    repos.each do |repo|
      repo_names << repo["name"]
      repo_collaborators = repo.rels[:collaborators].get.data
      repo_collaborators.each do |collaborator|
        collaborators_names << collaborator[:login]
      end
    end

    @repo_names = repo_names
    @collaborator_names_instance = collaborator_names.uniq!

    # binding.pry
  end
end
