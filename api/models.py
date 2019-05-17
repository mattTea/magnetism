from app import db

class Topic(db.Model):
    __tablename__ = 'topics'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }


class SubTopic(db.Model):
    __tablename__ = 'subtopics'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    topic_id = db.Column(db.Integer, db.ForeignKey('topics.id'))
    order = db.Column(db.Integer)

    def __init__(self, name, topic_id, order):
        self.name = name
        self.topic_id = topic_id
        self.order = order

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'topic_id': self.topic_id,
            'order': self.order
        }
