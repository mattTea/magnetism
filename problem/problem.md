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