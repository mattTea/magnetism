"""
This script is api router it:
   - responds to GET requests for data from the front end with JSON data packets
   - recieves POST requests from the front end which invokes methods in the model
"""

import os
from flask import Flask, jsonify, render_template
from api.config import app_config

from flask_sqlalchemy import SQLAlchemy

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

@app.route('/topics', methods=['GET'])
def topics():
    """ returns all topics from the topic db table """
    try:
        topic_list = Topic.query.all()
        response = jsonify([e.serialize() for e in topic_list])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as error:
        return str(error)

@app.route('/topics/<id>/subtopics', methods=['GET'])
def subtopics(id):
    try:
        subtopic_list = SubTopic.query.filter_by(topic_id=id).all()
        response = jsonify([e.serialize() for e in subtopic_list])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as error:
        return str(error)

if __name__ == '__main__':
    app.run()
