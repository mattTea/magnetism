Install commands
================

[Tutorial link](https://www.codementor.io/olawalealadeusi896/restful-api-with-python-flask-framework-and-postgres-db-part-1-kbrwbygx5)

1. $ `python --version`
=> Python 2.7.10

  [$`python3 --version` to see latest python3 version]

2. $ `brew install pipenv`

3. $ `pipenv --version`   
=> pipenv, version 2018.11.26

4. In root folder, run `pipenv --three` to create virtual python environment

5. `pipenv install flask`

6. `pipenv install pytest` <- in virtual env

7. Other potential installs:

(sqlalchemy)
(flask sqlalchemy)
(flask-migrate)
(flask-bcrypt)

## Before running application or tests

1. `pipenv --three` - sets up virtual environment - if you haven't done this previously

2. `pipenv shell` - takes you into the virtual environment


## To run application

3. `export FLASK_ENV=development` (this needs to be part of the setup, perhaps as a script)

4. `python3 run.py`

## To run tests

3. (May need to do a `pipenv install pytest` in virtual env)

4. `pytest`
