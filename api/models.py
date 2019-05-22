from app import db

class Topic(db.Model):
    __tablename__ = 'topics'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.String())

    def __init__(self, name, description):
        self.name = name
        self.description = description

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }


class SubTopic(db.Model):
    __tablename__ = 'subtopics'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.String())
    topic_id = db.Column(db.Integer, db.ForeignKey('topics.id'))
    order = db.Column(db.Integer)

    def __init__(self, name, description, topic_id, order):
        self.name = name
        self.description = description
        self.topic_id = topic_id
        self.order = order

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'topic_id': self.topic_id,
            'order': self.order
        }

class Resource(db.Model):
    __tablename__ = 'resources'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    content = db.Column(db.String())
    subtopic_id = db.Column(db.Integer, db.ForeignKey('subtopics.id'))

    def __init__(self, name, content, subtopic_id):
        self.name = name
        self.content = content
        self.subtopic_id = subtopic_id

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'content': self.content,
            'subtopic_id': self.subtopic_id,
        }

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer)
    resource_id = db.Column(db.Integer, db.ForeignKey('resources.id'))

    def __init__(self, score, resource_id):
        self.score = score
        self.resource_id = resource_id

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'score': self.score,
            'resource_id': self.resource_id,
        }

    def get_score(self):
        return self.score
