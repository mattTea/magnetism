from splinter import Browser
from api.models import *

def test_get_topics():

  browser = Browser('firefox', headless="true")

  topic = Topic(
    name="Physics"
  )
  db.session.add(topic)
  db.session.commit()

  browser.visit('http://localhost:5000/topics')
  assert browser.is_text_present('Physics')

  browser.quit()

def test_get_subtopics():

  browser = Browser('firefox', headless="true")

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

  list = Topic.query.all()
  topicId = list[-1].id
  browser.visit('http://localhost:5000/topics/{}/subtopics'.format(topicId))
  assert browser.is_text_present('butterfly')

  browser.quit()