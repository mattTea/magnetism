Install commands
================

[Tutorial link](https://www.codementor.io/olawalealadeusi896/restful-api-with-python-flask-framework-and-postgres-db-part-1-kbrwbygx5)

## In creating the project, we did this

1. $ `python --version`
=> Python 2.7.10

  [$`python3 --version` to see latest python3 version]

2. $ `brew install pipenv`

3. $ `pipenv --version`   
=> pipenv, version 2018.11.26

4. In root folder, run `pipenv --three` to create virtual python environment

5. `pipenv shell` - takes you into the virtual environment

5. `pipenv install flask`

6. `pipenv install pytest` <- in virtual env

7. `pipenv install splinter`

7. Other potential installs:

(sqlalchemy)
(flask sqlalchemy)
(flask-migrate)
(flask-bcrypt)

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

4. `pytest`

[Matchers in python3](https://buildmedia.readthedocs.org/media/pdf/splinter/latest/splinter.pdf)
