Magnetism Neto Learning
=======================

[![Build Status](https://travis-ci.com/mattTea/magnetism.svg?branch=master)](https://travis-ci.com/mattTea/magnetism)

README for the final engineering project

# In this project

- Python for the backend API
- Pytest for unit tests for python
- Splinter for feature tests for python

- REACT for the frontend

## To install the project locally

1. Run `./build/buildVM.sh` to build and enter a virtual environment

2. Once in the virtual environment, run `./build/buildEnv.sh` to setup the environment

3. If you already have the virtual environment setup from a previous install, you can enter the VM by typing `pipenv shell` and then you can run the `./build/buildEnv.sh` script again if needed

## To run application

If you are not already in a shell, you will need to do the following:

1. `pipenv shell` - takes you into the virtual environment

2. Consider running `./build/buildEnv.sh` to ensure that your VM is setup correctly

To run the (backend) appliation:

1. `python3 src/app.py`

## To run the python tests (backend API)

Again, you need to be in a shell to do this:

1. Start the application if you want the splinter tests to work!

2. `pytest`- will run pytest and splinter tests
