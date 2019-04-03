# Node/Express Backend API

## Application Routes

* `/statuses/user_timeline` Display a list of Tweets from a default accounts
* `/statuses/user_timeline?screen_name=fedecarg&count=10` Display a list of Tweets from a given user

## Development

1. Install the dependencies using `npm install`
2. Add secret keys and tokens to `nodemon.json`
3. Run `npm run dev`
4. Navigate to [http://localhost:3000](http://localhost:3000)

## Linting

```
npm run lint
```