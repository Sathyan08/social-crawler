class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    @review.reviewee = User.find(params[:user_id])
    @review.category = "1"

    if @review.save
      redirect_to current_user, notice: "Review Saved!"
    else
      redirect_to current_user, notice: "Review Not Saved! Please Resubmit"
    end
  end

  def update
    @review = Review.find_by(reviewee_id: params[:user_id])

    if @review.update(review_params)
      redirect_to current_user, notice: "Successfully Updated Review"
    else
      redirect_to current_user, notice: "Review Not Updated! Please Resubmit."
    end
  end

  def destroy

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
  #  t.integer  "user_id",     null: false
  #   t.integer  "reviewee_id", null: false
  #   t.string   "type",        null: false
  #   t.integer  "score",       null: false
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end
