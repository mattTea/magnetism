from splinter import Browser
from api.models import *

def test_get_topics():

  browser = Browser('firefox', headless="true")

  topic = Topic(
    name="Physics",
    description="Some stuff about Physics"
  )
  db.session.add(topic)
  db.session.commit()

  browser.visit('http://localhost:5000/api/topics')
  assert browser.is_text_present('Physics')

  browser.quit()

def test_get_subtopics():

  browser = Browser('firefox', headless="true")

  topic = Topic(
    name="Swimming",
    description="Some stuff about swimming"
  )
  db.session.add(topic)
  db.session.commit()

  subtopic = SubTopic(
    name="butterfly",
    description="Some stuff about butterfly",
    topic_id=topic.id,
    order=1
  )
  db.session.add(subtopic)
  db.session.commit()

  list = Topic.query.all()
  topicId = list[-1].id
  browser.visit('http://localhost:5000/api/topics/{}/subtopics'.format(topicId))
  assert browser.is_text_present('butterfly')

  browser.quit()

def test_get_resources_for_subtopic():

  browser = Browser('firefox', headless="true")

  topic = Topic(
    name="Music",
    description="Some stuff about Music"
  )
  db.session.add(topic)
  db.session.commit()

  subtopic = SubTopic(
    name="notation",
    description="Some stuff about notation",
    topic_id=topic.id,
    order=1
  )
  db.session.add(subtopic)
  db.session.commit()

  resource = Resource(
    name="Notation theory",
    content="la la la la la la. Do ray me fah so lah te da",
    subtopic_id = subtopic.id,
    rating = 1
  )
  db.session.add(resource)
  db.session.commit()

  browser.visit('http://localhost:5000/api/topics/{topic}/subtopics/{subtopic}/resources'.format(topic=topic.id, subtopic=subtopic.id))

  assert browser.is_text_present('Notation theory')
  assert browser.is_text_present("la la la la la la. Do ray me fah so lah te da")

  browser.quit()
