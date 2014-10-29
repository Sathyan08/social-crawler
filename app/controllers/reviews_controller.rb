class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    @review.reviewee = User.find(params[:user_id])
    @review.category = "1"

    if current_user.p_linked
      @review.reviewee.p_linked = true
    end

    if @review.save
      User.save_updated_weights #un-comment to allow recalculation on review
      redirect_to current_user, notice: "Review Saved!"
    else
      redirect_to current_user, notice: "Review Not Saved! Please Resubmit"
    end
  end

  def update
    @review = Review.find_by(reviewee_id: params[:user_id])

    if @review.update(review_params)
      User.save_updated_weights #un-comment to allow recalculation on review update
      @weighted_score = @review.reviewee.weighted_display
      render json: @weighted_score
      # redirect_to current_user, notice: "Successfully Updated Review"
    else
      redirect_to current_user, notice: "Review Not Updated! Please Resubmit."
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :user_id,
      :type,
      :score
      )
  end

end

