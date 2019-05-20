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

def test_resources_route():
  topic = Topic(
    name="Ruby"
  )
  db.session.add(topic)
  db.session.commit()

  subtopic = SubTopic(
    name="Arrays",
    topic_id=topic.id,
    order=1
  )
  db.session.add(subtopic)
  db.session.commit()

  resource = Resource(
    name="Array theory",
    content="Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error",
    subtopic_id = subtopic.id,
    rating = 1
  )
  db.session.add(resource)
  db.session.commit()

  with app.test_client() as c:
    resp = c.get('/topics/{topic}/subtopics/{subtopic}/resources'.format(topic=topic.id, subtopic=subtopic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "Array theory"
    assert data[0]["content"] == "Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error"
