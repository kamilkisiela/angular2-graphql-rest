// Defined schema
export const schema = [`
  type Profile {
    id: Int!
    fullName: String!
    title: String!
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
    profiles(_, { ids }, context) {
      return context.Profiles.all(ids);
    },
    profile(_, { id }, context) {
      return context.Profiles.single(id);
    },
  }
};
