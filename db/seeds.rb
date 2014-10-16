# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
def make_review(user, reviewee, score)
  review = Review.new
  review.user = user
  review.reviewee = reviewee
  review.score = score
  review.category = "1"
  review.save!

  reviewee.p_linked = true
  reviewee.save!
end

def review_all_collaborators(user, range, baseline)
  user.collaborators.each do |col|
    score = rand(range) + baseline
    make_review(user, col, score)
  end
end


paragon_user = User.find_by(gitname: "dpickett")

paragon_user.paragon = true
paragon_user.p_linked = true
paragon_user.save!

review_all_collaborators(paragon, 3, 6)

paragon.collaborators.each do |col|
  review_all_collaborators(col, 7, 3)
end

User.save_updated_weights
