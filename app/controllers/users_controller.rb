class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    data_total = client.user "#{@user.gitname}"
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
    @collaborator_names_instance = collaborators_names.uniq!
    @data_total = data_total
    # binding.pry
  end
end
