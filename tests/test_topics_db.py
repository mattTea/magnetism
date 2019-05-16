from app import db
from src.models import *

def test_topics_db(capsys):
  mathematics=Topic(
      name="Mathematics"
  )
  db.session.add(mathematics)
  db.session.commit()

  topics = Topic.query.all()

  assert topics[-1].name == "Mathematics"



    # # setup database
    # insert an entry or entries with fields
    # make a request on db
    # check return value against expected value
