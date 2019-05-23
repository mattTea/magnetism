from app import db
from api.models import *

def test_topics_db():
  mathematics=Topic(
      name="Mathematics",
      description="Mathematics (from Greek μάθημα máthēma, 'knowledge, study, learning') includes the study of such topics as quantity, structure, space, and change.",
  )
  db.session.add(mathematics)
  db.session.commit()

  topics = Topic.query.all()

  assert topics[-1].name == "Mathematics"
  assert "μάθημα máthēma" in topics[-1].description

def test_subtopics_db():
    mathematics=Topic(
        name="Mathematics",
        description="Mathematics (from Greek μάθημα máthēma, 'knowledge, study, learning') includes the study of such topics as quantity, structure, space, and change.",
    )
    db.session.add(mathematics)
    db.session.commit()

    sums=SubTopic(
        name="Sums",
        description="In mathematics, sums is the addition of a sequence of any kind of numbers, called addends or summands.",
        topic_id = mathematics.id,
        display_order = 1
    )

    db.session.add(sums)
    db.session.commit()

    subtopics = SubTopic.query.all()

    assert subtopics[-1].name == "Sums"
    assert "sums is the addition" in subtopics[-1].description

def test_resources_db():
    mathematics=Topic(
        name="Mathematics",
        description="Mathematics (from Greek μάθημα máthēma, 'knowledge, study, learning') includes the study of such topics as quantity, structure, space, and change."
    )
    db.session.add(mathematics)
    db.session.commit()

    sums=SubTopic(
        name="Sums",
        description="In mathematics, sums is the addition of a sequence of any kind of numbers, called addends or summands.",
        topic_id = mathematics.id,
        display_order = 1
    )

    db.session.add(sums)
    db.session.commit()

    longDivision=Resource(
        name="Long Division",
        content="Don't forget to carry the 1",
        url="https://url.com",
        subtopic_id = sums.id,
    )

    db.session.add(longDivision)
    db.session.commit()

    resources = Resource.query.all()

    assert resources[-1].name == "Long Division"
    assert resources[-1].content == "Don't forget to carry the 1"

def test_reviews_db():
    mathematics=Topic(
        name="Mathematics",
        description="Mathematics (from Greek μάθημα máthēma, 'knowledge, study, learning') includes the study of such topics as quantity, structure, space, and change."
    )
    db.session.add(mathematics)
    db.session.commit()

    sums=SubTopic(
        name="Sums",
        description="In mathematics, sums is the addition of a sequence of any kind of numbers, called addends or summands.",
        topic_id = mathematics.id,
        display_order = 1
    )

    db.session.add(sums)
    db.session.commit()

    longDivision=Resource(
        name="Long Division",
        content="Don't forget to carry the 1",
        url="https://url.com",
        subtopic_id = sums.id,
    )

    db.session.add(longDivision)
    db.session.commit()

    review=Review(
        score=4,
        resource_id = longDivision.id
    )

    db.session.add(review)
    db.session.commit()

    reviews = Review.query.all()

    assert reviews[-1].score == 4
