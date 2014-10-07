Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :github,
    ENV["GITHUB_KEY"],
    ENV["GITHUB_SECRET"]
    )
end

# user.provider = auth["provider"]
#       user.uid = auth["uid"]
#       user.name = auth["info"]["name"]
#       user.gitname = auth["info"]["nickname"]
