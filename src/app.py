import os
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

from config import app_config

# app initialisation
app = Flask(__name__)

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import *

@app.route('/', methods=['GET'])
def index():
  """
  example endpoint
  """
  return 'Congratulations, your first endpoint is working.'

@app.route('/topics', methods=['GET'])
def topics():
  return 'Physics'
  # This would invoke the model
  # And then call a view to convert to JSON

if __name__ == '__main__':
  app.run()
