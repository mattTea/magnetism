from flask import Flask, json, jsonify
from app import *

def test_topics_route():
  topic = Topic(
    name="Mathematics",
    description="Some stuff about maths"
  )
  db.session.add(topic)
  db.session.commit()

  with app.test_client() as c:
    resp = c.get('/api/topics')
    data = json.loads(resp.data)
    assert data[0]["name"] == "Mathematics"

def test_subtopics_route():
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

  with app.test_client() as c:
    resp = c.get('/api/topics/{}/subtopics'.format(topic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "butterfly"

def test_resources_route():
  topic = Topic(
    name="Ruby",
    description="Some stuff about Ruby"
  )
  db.session.add(topic)
  db.session.commit()

  subtopic = SubTopic(
    name="Arrays",
    description="Some stuff about Arrays",
    topic_id=topic.id,
    order=1
  )
  db.session.add(subtopic)
  db.session.commit()

  resource = Resource(
    name="Array theory",
    content="Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error",
    url="https://url.com",
    subtopic_id = subtopic.id,
  )
  db.session.add(resource)
  db.session.commit()

  with app.test_client() as c:
    resp = c.get('/api/topics/{topic}/subtopics/{subtopic}/resources'.format(topic=topic.id, subtopic=subtopic.id))
    data = json.loads(resp.data)
    assert data[0]["name"] == "Array theory"
    assert data[0]["content"] == "Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error"


def test_post_review():
    topic = Topic(
      name="Ruby",
      description="Some stuff about Ruby"
    )
    db.session.add(topic)
    db.session.commit()

    subtopic = SubTopic(
      name="Arrays",
      description="Some stuff about Arrays",
      topic_id=topic.id,
      order=1
    )
    db.session.add(subtopic)
    db.session.commit()

    resource = Resource(
      name="Array theory",
      content="Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error",
      url="https://url.com",
      subtopic_id = subtopic.id,
    )
    db.session.add(resource)
    db.session.commit()

    post_review = {"score": 87}

    with app.test_client() as c:
      assert len(Review.query.all()) == 0

      url = '/api/topics/{topic}/subtopics/{subtopic}/resources/{resource}/reviews'.format(topic=topic.id, subtopic=subtopic.id, resource=resource.id)
      resp = c.post(url, json=post_review)

      assert resp.status == "200 OK"

      score = Review.query.filter_by(resource_id=resource.id).first().score
      assert score == 87

def test_get_review_scores():
    topic = Topic(
      name="Ruby",
      description="Some stuff about Ruby"
    )
    db.session.add(topic)
    db.session.commit()

    subtopic = SubTopic(
      name="Arrays",
      description="Some stuff about Arrays",
      topic_id=topic.id,
      order=1
    )
    db.session.add(subtopic)
    db.session.commit()

    resource = Resource(
      name="Array theory",
      content="Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error",
      url="https://url.com",
      subtopic_id = subtopic.id,
    )
    db.session.add(resource)
    db.session.commit()

    post_review = {"score": 87}

    with app.test_client() as c:
      assert len(Review.query.all()) == 0

      url = '/api/topics/{topic}/subtopics/{subtopic}/resources/{resource}/reviews'.format(topic=topic.id, subtopic=subtopic.id, resource=resource.id)
      resp = c.post(url, json=post_review)

      assert resp.status == "200 OK"

      get_url = '/api/topics/{topic}/subtopics/{subtopic}/resources/{resource}/reviews'.format(topic=topic.id, subtopic=subtopic.id, resource=resource.id)
      resp = c.get(get_url)
      data = json.loads(resp.data)
      assert data['scores'][0]["score"] == 87

def test_get_review_average_count():
    topic = Topic(
      name="Ruby",
      description="Some stuff about Ruby"
    )
    db.session.add(topic)
    db.session.commit()

    subtopic = SubTopic(
      name="Arrays",
      description="Some stuff about Arrays",
      topic_id=topic.id,
      order=1
    )
    db.session.add(subtopic)
    db.session.commit()

    resource = Resource(
      name="Array theory",
      content="Arrays start counting at zero. Trying to access an empty array may throw an out of bounds error",
      url="https://url.com",
      subtopic_id = subtopic.id,
    )
    db.session.add(resource)
    db.session.commit()

    post_first_review = {"score": 3}
    post_second_review = {"score": 5}

    with app.test_client() as c:
      assert len(Review.query.all()) == 0

      url = '/api/topics/{topic}/subtopics/{subtopic}/resources/{resource}/reviews'.format(topic=topic.id, subtopic=subtopic.id, resource=resource.id)

      resp = c.post(url, json=post_first_review)
      assert resp.status == "200 OK"

      resp = c.post(url, json=post_second_review)
      assert resp.status == "200 OK"

      get_url = '/api/topics/{topic}/subtopics/{subtopic}/resources/{resource}/reviews'.format(topic=topic.id, subtopic=subtopic.id, resource=resource.id)
      resp = c.get(get_url)

      data = json.loads(resp.data)
      assert data["average"] == 4
      assert data["review_count"] == 2
