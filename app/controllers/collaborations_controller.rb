class CollaborationsController < ApplicationController

  def show
    @collaboration = Collaboration.find(params[:id])
  end

  def edit
    @collaboration = Collaboration.find(params[:id])
  end

  def update
    @collaboration = Collaboration.find(params[:id])
    binding.pry

    @collaboration.highlighted = true

    if @collaboration.update(collaboration_params)
      redirect_to current_user, notice: "Successfully Updated"
    else
      redirect_to current_user, notice: "Not Updated! Please Resubmit."
    end
  end

  private

  def collaboration_params
    params.require(:collaboration).permit(
      :user_id,
      :repository_id,
      :role,
      :description,
      :highlighted
      )
  end
end
