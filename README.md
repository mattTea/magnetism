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

5. Run these commands to setup environment variables (this needs to be part of the setup, perhaps as a script)
  - `export APP_SETTINGS="config.Development"`
  - `export DATABASE_URL="postgresql://localhost/magnetism"`

6. Create the database `psql -c 'create database magnetism;'`

7. Run the database migration scripts:
  - python src/manage.py db init;
  - python src/manage.py db migrate;
  - python src/manage.py db upgrade;

## To run application

If you are not already in a shell, you will need to do the following:

1. `pipenv shell` - takes you into the virtual environment

2. Run these commands to setup environment variables (this needs to be part of the setup, perhaps as a script)
  - `export APP_SETTINGS="config.Development"`
  - `export DATABASE_URL="postgresql://localhost/magnetism"`

To run the appliation:

1. `python3 src/app.py`

## To run tests

1. (May need to do a `pipenv install pytest` in virtual env)

2. Start the application if you want the splinter tests to work!

3. `pytest`- will run pytest and splinter tests
