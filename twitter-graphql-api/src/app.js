import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import schema from './schema';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(compression()); // apply gzip compression
app.use(cors());
app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (!isProduction) {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

export default app;
