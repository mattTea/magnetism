from flask import Flask

from .config import app_config

def create_app(env_name):
  """
  Create app
  """

  # app initialisation
  app = Flask(__name__)

  app.config.from_object(app_config[env_name])

  @app.route('/', methods=['GET'])
  def index():
    """
    example endpoint
    """
    return 'Congratulations, your first endpoint is working.'

  @app.route('/sam', methods=['GET'])
  def sam():
    return 'Hi Sam!'

  return app
