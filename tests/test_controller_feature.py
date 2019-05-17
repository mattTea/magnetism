from splinter import Browser
from api.models import *

def test_get_topics():

  browser = Browser('firefox', headless="true")

  browser.visit('http://localhost:5000/topics/add')
  browser.visit('http://localhost:5000/topics')
  assert browser.is_text_present('Physics')

  browser.quit()

def test_get_subtopics(add_test_data):

  browser = Browser('firefox', headless="true")

  list = Topic.query.all()
  topicId = list[-1].id
  browser.visit('http://localhost:5000/topics/{}/subtopics'.format(topicId))
  assert browser.is_text_present('butterfly')

  browser.quit()