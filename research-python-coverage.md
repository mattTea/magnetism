Disclaimer: I'm not sure whether we'd be best off running coverage with pytest-cov or else coverage with pytest-cov.

## Coverage.py

Coverage.py is the first option that comes up on Google.
Supported on Python versions from 2.6 up to 3.7.
https://coverage.readthedocs.io/en/v4.5.x/

Easily set up and will produce a coverage report percentage and also noting the lines that are untested.
Can also jazz up if fancier presentation is something we want to implement.

Can be fine-tuned to ignore parts of the code that "aren't interesting".

Potential problems if we later decide to use the following libraries: execv, thread.
Also beware: sys.settrace is the Python feature that coverage.py uses to see what’s happening in your program. If another part of your program is using sys.settrace, then it will conflict with coverage.py, and it won’t be measured properly.

If we require coverage data at some point:
The coverage.CoverageData class provides access to coverage data stored in coverage.py data files.

coverage.py comes recommended by the Python Software Foundation itself "One of the most popular third-party coverage tools is coverage.py which provides very nice HTML output along with advanced features such as branch coverage."

## Pytest

Third-party framework which runs on Python 2.7, 3.4, 3.5 & 3.6.  It "It aims to provide a framework to write your tests efficiently, by remove all the overheads for creating tests." (I'm not really sure what it means here by "overheads").

## Pytest-cov

This plugin produces coverage reports. Compared to just using coverage run this plugin does some extras:

    Subprocess support: you can fork or run stuff in a subprocess and will get covered without any fuss.
    Xdist support: you can use all of pytest-xdist’s features and still get coverage.
    Consistent pytest behavior. If you run coverage run -m pytest you will have slightly different sys.path (CWD will be in it, unlike when running pytest).

Produced by Python Software Foundation itself.
https://pypi.org/project/pytest-cov/
Most recent update was 2 weeks ago so it's very up-to-date.

Coverage Data File

The Coverage Data File is erased at the beginning of testing to ensure clean data for each test run. If you need to combine the coverage of several test runs you can use the --cov-append option to append this coverage data to coverage data from previous test runs.
