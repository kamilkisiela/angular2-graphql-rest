import { apolloServer } from 'apollo-server';

import {
  resolvers,
  schema
} from './schema';

export default function(app) {
  app.use('/graphql', apolloServer((req) => ({
    graphiql: true,
    pretty: true,
    schema,
    resolvers
  })));
}
