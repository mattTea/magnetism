"""
This script is api router it:
   - responds to GET requests for data from the front end with JSON data packets
   - recieves POST requests from the front end which invokes methods in the model
"""

import os
from flask import Flask, jsonify, render_template, request, json
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

@app.route('/api/topics', methods=['GET'])
def topics():
    """ returns all topics from the topic db table """
    try:
        topic_list = Topic.query.all()
        response = jsonify([e.serialize() for e in topic_list])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as error:
        return str(error), 500

@app.route('/api/topics/<id>/subtopics', methods=['GET'])
def subtopics(id):
    try:
        subtopic_list = SubTopic.query.filter_by(topic_id=id).all()
        response = jsonify([e.serialize() for e in subtopic_list])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as error:
        return str(error), 500

@app.route('/api/topics/<topic_id>/subtopics/<subtopic_id>/resources', methods=['GET'])
def resources(topic_id, subtopic_id):
    try:
        resource_list = Resource.query.filter_by(subtopic_id=subtopic_id).all()
        response = jsonify([e.serialize() for e in resource_list])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as error:
        return str(error), 500

if __name__ == '__main__':
    app.run()

@app.route('/api/topics/<topic_id>/subtopics/<subtopic_id>/resources/<resource_id>/reviews', methods=['POST'])
def record_feedback(topic_id, subtopic_id, resource_id):
    try:
        user_input_score = request.get_json()

        review = Review(
            score = user_input_score['score'],
            resource_id = resource_id
        )
        
        db.session.add(review)
        db.session.commit

        return "200 OK"
    except Exception as error:
        return str(error), 500

if __name__ == '__main__':
    app.run()
