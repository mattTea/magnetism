Magnetism Neto Learning
=======================

[![Build Status](https://travis-ci.com/mattTea/magnetism.svg?branch=master)](https://travis-ci.com/mattTea/magnetism)

Visit the deployed application [here](http://mag-neto.herokuapp.com/)


# About the project

For our final project, Team Magnetism have built a learning application. The idea is that anyone who wants to learn something new can have access to suggested learning paths/knowledge nuggets with "rated" resources. The more people that use the service, the more accurate and useful the ratings will become.


### Functionality

1. The ability to pick a topic

2. The ability to see sub-topics/learning paths/knowledge nuggets for that topic

3. The ability to see learning resources for sub-topics

4. The ability to give a rating to the resource, and see all previous reviews

------

## Technologies used

- Python for the backend API
- Pytest for unit tests for python
- Splinter for feature tests for python

- React.js for the user interface
- Jest for javascript testing

------

## To install the project locally

1. Run `. apiBuild/buildVM.sh` to build and enter a virtual environment

2. Once in the virtual environment, run `. apiBuild/buildEnv.sh` to setup the environment

3. If you already have the virtual environment setup from a previous install, you can enter the VM by typing `pipenv shell` and then you can run the `. apiBuild/buildEnv.sh` script again if needed

------

## To run application

### Backend api

If you are not already in a shell, you will need to do the following:

1. `pipenv shell` - takes you into the virtual environment

2. Run `. apiBuild/buildEnv.sh` to ensure that your VM is setup correctly

3. Run `python3 app.py` to run the api application

4. (To kill the shell -> `ctrl` + `c`)


### Front-end UI

1. Install node modules, specified in the package.json:

```
npm install
```

2. Launch the application:
```
npm start
```

3. Visit `http://localhost:3000`

------

## To run tests

### Python backend api tests

1. If you are not already in a shell, you will need to do the following:
    - Run `pipenv shell` - takes you into the virtual environment
    - Run `. apiBuild/buildEnv.sh` to ensure that your VM is setup correctly

2. Start the application by running `python3 app.py` (so that the splinter feature tests work)

3. `pytest -r A`- will run pytest and splinter tests with a summary report

4. `pytest -r A --cov-report term-missing --cov` - will generate a coverage report. If required, it's possible to modify the `.coveragerc` file in order to specify particular files/folders that you want to scan/omit.  


### Javascript frontend UI tests

1. Switch to front_end directory: `cd src`

2. Run tests `npm run test`

------

## To run the python linter (backend api)

1. `pylint [FILENAME]` e.g. `pylint app.py`- will run the linter for the `app.py` file
