# Tweetly

This repository demonstrates the use of Node, React, Redux, Express, GraphQL and Docker

## User Stories

Display a list of Tweets from a default user
```
  As a user
  When I visit the "timeline" page on "desktop"
  I want to see a list of tweets posted by "cnnbrk"
  So that I can read the most recent Tweets on his timeline
```
Display a list of Tweets from a given user
```
  As a user
  When I visit the "timeline" page on "mobile"
  I want to see a list of tweets posted by "fedecarg"
  So that I can read the most recent Tweets on his timeline
```

## Overview

* **twitter-api**: Twitter API client library written for Node.js using es6 and Express.js.
* **twitter-webapp**: Responsive React/Redux single-page web application that talks to the `twitter-api` backend API.
* **twitter-graphql**: (WIP) API proxy that wraps the `twitter-api` backend API with GraphQL.
## URLs

* **twitter-api**
  - `/statuses/user_timeline?screen_name=cnnbrk&count=10` Show 10 lates tweets posted by cnnbrk
  - `/statuses/user_timeline?screen_name=undefined` Show error message when user doesn't exist

* **twitter-webapp**
  - `/tweets` Show the latest tweets from cnnbrk
  - `/tweets/fedecarg` Show the latest tweets from a given user

## Development

* **twitter-api**
  1. Install the dependencies using `npm install`
  2. Add secret keys and tokens to `nodemon.json`
  3. Run `npm run dev`
  4. Navigate to [http://localhost:3000](http://localhost:3000)

* **twitter-webapp**
  1. Install the dependencies using `npm install`
  3. Run `npm run start`
  4. Navigate to [http://localhost:3001](http://localhost:3001)

## Error messages

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

![Desktop](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot01.png)

![Mobile](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot02.png)

**twitter-api**

![Backend API](https://raw.githubusercontent.com/fedecarg/tweetly/master/screenshot03.png)
