from flask import Flask, json
from app import *

def test_topics_route(clear_database, insert_data):

  with app.test_client() as c:
    resp = c.get('/topics')
    data = json.loads(resp.data)
    assert data[-1]["name"] == "Swimming"

def test_subtopics_route(clear_database, insert_data):
  print(insert_data.topic)

  with app.test_client() as c:
    resp = c.get('/topics/{}/subtopics'.format(topic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "butterfly"

def test_resources_route(clear_database, insert_ruby_data):

  with app.test_client() as c:
    resp = c.get('/topics/{topic}/subtopics/{subtopic}/resources'.format(topic=topic.id, subtopic=subtopic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "Array theory"
    assert data[0]["content"] == "Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error"
