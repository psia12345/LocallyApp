# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
APP_CONFIG = YAML.load_file("config/cloudinary.yml")
