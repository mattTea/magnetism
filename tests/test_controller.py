from flask import Flask, json
from app import *

def test_topics_route():
  topic = Topic(
    name="Mathematics"
  )
  db.session.add(topic)
  db.session.commit()
  
  with app.test_client() as c:
    resp = c.get('/topics')
    data = json.loads(resp.data)
    assert data[0]["name"] == "Mathematics"

def test_subtopics_route():
  topic = Topic(
    name="Swimming"
  )
  db.session.add(topic)
  db.session.commit()

  subtopic = SubTopic(
    name="butterfly",
    topic_id=topic.id,
    order=1
  )
  db.session.add(subtopic)
  db.session.commit()

  with app.test_client() as c:
    resp = c.get('/topics/{}/subtopics'.format(topic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "butterfly"