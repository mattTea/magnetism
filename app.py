import os
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

from api.config import app_config

# app initialisation
app = Flask(__name__, static_folder="build/static", template_folder="build")

app.config.from_object(app_config[os.environ['APP_SETTINGS']])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from api.models import *

@app.route('/', methods=['GET'])
def index():
  """
  example endpoint
  """
  return render_template('index.html')

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
      response = jsonify([e.serialize() for e in topics])
      response.headers.add('Access-Control-Allow-Origin', '*')
      return response
  except Exception as e:
      return(str(e))

if __name__ == '__main__':
  app.run()