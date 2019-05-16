Magnetism Neto Learning
=======================

[![Build Status](https://travis-ci.com/mattTea/magnetism.svg?branch=master)](https://travis-ci.com/mattTea/magnetism)

# About the project

For our final project, Team Magnetism have built a learning application. The idea is that anyone who wants to learn something new can have access to suggested learning paths/knowledge nuggets with "rated" resources. The more people that use the service, the more accurate and useful the ratings will become.

Our current functionality includes:

1. The ability to pick a topic (MVP - work in progress)
2. The ability to see sub-topics/learning paths/knowledge nuggets for that topic (MVP - work in progress)
3. The ability to see learning resources for sub-topics/learning paths/knowledge nuggets (MVP - work in progress)
4. The ability to give a rating to the resource (MVP - work in progress)

## In this project

- Python for the backend API
- Pytest for unit tests for python
- Splinter for feature tests for python

- REACT for the frontend

### To install the project locally

1. Run `./build/buildVM.sh` to build and enter a virtual environment

2. Once in the virtual environment, run `./build/buildEnv.sh` to setup the environment

3. If you already have the virtual environment setup from a previous install, you can enter the VM by typing `pipenv shell` and then you can run the `./build/buildEnv.sh` script again if needed

### To run application

#### Back-end

If you are not already in a shell, you will need to do the following:

1. `pipenv shell` - takes you into the virtual environment

2. Consider running `./build/buildEnv.sh` to ensure that your VM is setup correctly

To run the (backend) application:

1. `python3 app.py`

#### Front-end

1. Switch to the front_end directory:

```
cd front_end
```
2. Install node modules, specified in the package.json:

```
npm install
```

If you're using yarn, use the following command instead:

```
yarn
```
### To run the python tests (backend API)

Again, you need to be in a shell to do this:

1. Start the application if you want the splinter tests to work!

2. `pytest`- will run pytest and splinter tests

3.  `pytest --cov-report term-missing --cov` use this command to generate a coverage report. If required, it's possible to modify the .coveragerc file in order to specify particular files/folders that you want to scan/omit.  

### To run the python linter (backend API)

1. `pylint [FILENAME]` e.g. `pylint app.py`- will run the linter

### To run the javascript tests

1. Switch to front_end directory: `cd front_end`
2. Run tests `npm run test` or `yarn test` if you're using yarn

# Future functionality

In the future we would also like to build:

- The ability for "collaborators" to sign-up and add content for others to use
