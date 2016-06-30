import ApolloClient, { createNetworkInterface } from 'apollo-client';

// Polyfill fetch
import 'whatwg-fetch';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql', {
    credentials: 'same-origin',
  }),
  shouldBatch: true,
});
