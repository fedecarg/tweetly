import express from 'express';
import graphqlHTTP from 'express-graphql';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import compress from 'compression';
import QuerySchema from './schemas/query'

const app = express();
const environment = process.env.NODE_ENV || 'development';

app.use(compress()); // apply gzip compression
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// GraphQL tweets endpoint
app.use('/api/tweets', graphqlHTTP({
  schema: QuerySchema,
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  })
}));

app.options('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.end();
});

// Error handler
app.use((err, req, res) => {
  res.status(500).send('Invalid Request');
});

export default app;
