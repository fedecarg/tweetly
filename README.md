# Tweetly

This repository demonstrates the use of Node, React, Redux, Express, GraphQL and Docker

## User Stories

**Display a list of Tweets from a default user**
```/Users/fed/GitHub/tweetly/README.md
  As a user
  When I visit the "timeline" page on "desktop"
  I want to see a list of tweets posted by "cnnbrk"
  So that I can read the most recent Tweets on his timeline
```
**Display a list of Tweets from a given user**
```
  As a user
  When I visit the "timeline" page on "mobile"
  I want to see a list of tweets posted by "fedecarg"
  So that I can read the most recent Tweets on his timeline
```

## Overview

* **twitter-api**: Twitter API client library written for Node.js using es6 and Express.js.
* **twitter-graphql-api**: API proxy that wraps the `twitter-api` backend API with GraphQL.
* **twitter-webapp**: Responsive React/Redux single-page web application that talks to the `twitter-api` backend API.

## URLs

* **twitter-api**
  - `/statuses/user_timeline?screen_name=cnnbrk&count=10` Returns a collection of tweets posted by cnnbrk
  - `/statuses/user_timeline?screen_name=undefined` Returns an error message

* **twitter-graphql-api**
  - `/graphql?query=` GraphQL queries
  - `/graphiql?query=` In-browser IDE for exploring GraphQL (development)

* **twitter-webapp**
  - `/tweets` Displays latest tweets from @cnnbrk
  - `/tweets/fedecarg` Displays latest tweets from from a given user, in this case @fedecarg
  
## Setup

* **twitter-api**
  - Install the dependencies using `npm install`
  - Add secret keys and tokens to `nodemon.json`
  - Run `npm run dev`
  - Navigate to [http://localhost:3000](http://localhost:3000)

* **twitter-webapp**
  - Install the dependencies using `npm install`
  - Run `npm run start`
  - Navigate to [http://localhost:3001](http://localhost:3001)
  
* **twitter-graphql-api**
  - Install the dependencies using `npm install`
  - Run `npm run dev`
  - Navigate to [http://localhost:3002](http://localhost:3002)

## Error Messages

**twitter-api**

[GET] /statuses/user_timeline
```
{
  "code": 89,
  "error": "Invalid or expired token."
}
```
[GET] /statuses/user_timeline?screen_name=iqwe912k&count=10
```
{
  "code": 34,
  "error": "Sorry, that page does not exist."
}
```

## Screenshots

**twitter-webapp**

![Desktop](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot01.jpg)

![Mobile](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot02.jpg)

**twitter-api**

![Twitter API](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot03.jpg)

**twitter-graphql-api**

![GraphQL API](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot04.jpg)

## CI Workflow

Deployments are managed using Heroku, Docker and GitHub:
* https://tweetly-api.herokuapp.com/statuses/user_timeline?screen_name=fedecarg&count=1

![Heroku](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot05.jpg)
