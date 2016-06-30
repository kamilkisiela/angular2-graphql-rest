import { apolloServer } from 'apollo-server';

import {
  resolvers,
  schema
} from './schema';

import {
  Profiles
} from '../../sql/models';

export default function(app) {
  app.use('/graphql', apolloServer((req) => ({
    graphiql: true,
    pretty: true,
    context: {
      Profiles: new Profiles
    },
    schema,
    resolvers
  })));
}
