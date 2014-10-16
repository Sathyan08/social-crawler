task import_lessons: :environment do
  User.save_updated_weights
end
