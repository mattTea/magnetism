import pytest
import sys
sys.path.append('.')

from app import app, db
from src.models import *

@pytest.fixture(scope="session", autouse=True)
def setup_module():
    db.session.query(Topic).delete()
    db.session.commit()
