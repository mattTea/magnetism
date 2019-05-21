import pytest
import sys
sys.path.append('.')

from app import app, db
from api.models import *

@pytest.fixture(scope="function")
def insert_data():
    print("I am in the setup fixture")
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

    return topic, subtopic

@pytest.fixture(scope="function")
def insert_ruby_data():
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

@pytest.fixture(scope="function")
def clear_database():
    print("I am in the teardown fixture")
    db.session.query(Resource).delete()
    db.session.query(SubTopic).delete()
    db.session.query(Topic).delete()
    db.session.commit()
