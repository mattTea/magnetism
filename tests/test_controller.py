from flask import Flask, json
from app import *

def test_topics_route():
  with app.test_client() as c:
    resp = c.get('/topics')
    data = json.loads(resp.data)
    assert data[0]["name"] == "Mathematics"