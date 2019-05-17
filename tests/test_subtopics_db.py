from app import db
from api.models import *

def test_subtopics_db():
  swimming=Topic(
    name="Swimming"
  )
  db.session.add(swimming)
  db.session.commit()
  
  butterfly=SubTopic(
    name="butterfly",
    topic_id=swimming.id,
    order=1
  )
  db.session.add(butterfly)
  db.session.commit()

  subtopics = SubTopic.query.all()
  assert subtopics[-1].name == "butterfly"