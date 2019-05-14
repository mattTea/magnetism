import os
from flask import Flask, request, jsonify
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

@app.route("/topics/add")
def add_topic():
    name='Physics'
    try:
      topic=Topic(
          name=name
      )
      db.session.add(topic)
      db.session.commit()
      return "topic added"
    except Exception as e:
      return(str(e))

@app.route('/topics', methods=['GET'])
def topics():
  try:
      topics=Topic.query.all()
      return jsonify([e.serialize() for e in topics])
  except Exception as e:
      return(str(e))

if __name__ == '__main__':
  app.run()
