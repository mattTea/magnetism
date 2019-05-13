Problem Breakdown
=================

## Meeting with Sophie and Michael

### Language & Technology

_Could split the team front end and backend_

Heavy user interface
- What framework best for the UI we want

Back end data (and DBs)
- How many users
- What are the main back end tasks to be used, what frameworks work best


#### Python

- (Good for web scraping)
- Django - like Rails
- [Flask](http://flask.pocoo.org/) - micro framework like Sinatra for Python

    - https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xxiii-application-programming-interfaces-apis
      - _This is the problem area where Application Programming Interfaces (or APIs) can help. An API is a collection of HTTP routes that are designed as low-level entry points into the application. Instead of defining routes and view functions that return HTML to be consumed by web browsers, APIs allow the client to work directly with the application's resources, leaving the decision of how to present the information to the user entirely to the client. For example, an API in Microblog could provide user and blog post information to the client, and it could also allow the user to edit an existing blog post, but only at the data level, without mixing this logic with HTML._

    - [Capybara feature testing in Python](https://elliterate.github.io/capybara.py/)



#### Kotlin

- [Spark](http://sparkjava.com/) - micro framework like Sinatra for Kotlin
- Straightforward tutorials for [setting up an api in Spark](http://sparkjava.com/tutorials/kotlin)


#### Elixir

- functional programming language
- [Phoenix](https://phoenixframework.org/) -> web framework like Rails for building APIs

------

## What does our app need to do? (for us to decide on tech)

- Web scraping
- Ranking
  - does this need to include refining search query (algorithm)
  - weighting the rankings
- FE -> good user interface
- Api in BE - to be consumed by FE
- db security
- Mobile app option
- Text summarisation algorithms
- Deployment - does Heroku have limited support for certain languages?
  - Keep it simple