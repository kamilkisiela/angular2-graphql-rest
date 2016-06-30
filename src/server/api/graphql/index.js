import { apolloServer } from 'apollo-server';

export default function(app) {
  app.use('/graphql', apolloServer((req) => ({
    graphiql: true,
    pretty: true
  })));
}
