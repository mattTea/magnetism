Magnetism Neto Learning
=======================

[![Build Status](https://travis-ci.com/mattTea/magnetism.svg?branch=master)](https://travis-ci.com/mattTea/magnetism)

README for the final engineering project

# In this project

- Python for the backend API
- Pytest for unit tests for python
- Splinter for feature tests for python



## Before running application or tests

1. `brew install pipenv` - install pipenv to then manage the other installs

2. `pipenv --three` - sets up virtual environment - if you haven't done this previously

3. `pipenv shell` - takes you into the virtual environment

4. `pipenv install` - will install all dependencies from the pipfile


## To run application

3. `export FLASK_ENV=development` (this needs to be part of the setup, perhaps as a script)

4. `python3 run.py`

## To run tests

3. (May need to do a `pipenv install pytest` in virtual env)

4. Start the application if you want the splinter tests to work!

4. `pytest`- will run pytest and splinter tests
