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
  }

  schema {
    query: Query
  }
`];

// Define resolvers
export const resolvers = {};
