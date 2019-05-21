from app import db
from api.models import *

def test_topics_db():
  mathematics=Topic(
      name="Mathematics"
  )
  db.session.add(mathematics)
  db.session.commit()

  topics = Topic.query.all()

  assert topics[-1].name == "Mathematics"

def test_subtopics_db():
    mathematics=Topic(
        name="Mathematics"
    )
    db.session.add(mathematics)
    db.session.commit()

    sums=SubTopic(
        name="Sums",
        topic_id = mathematics.id,
        order = 1
    )

    db.session.add(sums)
    db.session.commit()

    subtopics = SubTopic.query.all()

    assert subtopics[-1].name == "Sums"

def test_resources_db():
    mathematics=Topic(
        name="Mathematics"
    )
    db.session.add(mathematics)
    db.session.commit()

    sums=SubTopic(
        name="Sums",
        topic_id = mathematics.id,
        order = 1
    )

    db.session.add(sums)
    db.session.commit()

    longDivision=Resource(
        name="Long Division",
        content="Don't forget to carry the 1",
        subtopic_id = sums.id,
        rating = 1
    )
    
    db.session.add(longDivision)
    db.session.commit()

    resources = Resource.query.all()

    assert resources[-1].name == "Long Division"
    assert resources[-1].content == "Don't forget to carry the 1"
