import pytest
import sys
sys.path.append('.')

from app import app, db
from api.models import *

@pytest.fixture(scope="function", autouse=True)
def teardown_module():
  db.session.query(Review).delete()
  db.session.query(Resource).delete()
  db.session.query(SubTopic).delete()
  db.session.query(Topic).delete()
  db.session.commit()

# @pytest.fixture(scope="function", autouse=True)
# def setup_module():
#   topic = Topic(
#     name="Swimming"
#   )
#   db.session.add(topic)
#   db.session.commit()

#   subtopic = SubTopic(
#     name="butterfly",
#     topic_id=topic.id,
#     display_order=1
#   )
#   db.session.add(subtopic)
#   db.session.commit()
