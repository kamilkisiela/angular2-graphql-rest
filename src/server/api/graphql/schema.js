import {
  Profiles
} from '../../sql/models';

// Defined schema
export const schema = [`
type Profile {
  id: Int!
  fullName: String!
  title: String!
  friends: [Profile]!
  avatar: String!
}

type Query {
  profiles (ids: [Int]): [Profile]
  profile (id: Int!): Profile
}

schema {
  query: Query
}
`];

// Define resolvers
export const resolvers = {
  Query: {
    /**
     * - data
     * - arguments
     * - context
     */
    profiles(_, { ids }, context) {
      return context.Profiles.all(ids);
    },
    profile(_, { id }, context) {
      return context.Profiles.single(id);
    }
  },
  Profile: {
    friends({ id }, args, context) {
      return context.Profiles.friends(id);
    }
  }
};
