from app import db
from api.models import *

def test_topics_db(capsys):
  mathematics=Topic(
      name="Mathematics"
  )
  db.session.add(mathematics)
  db.session.commit()

  topics = Topic.query.all()

  assert topics[-1].name == "Mathematics"
