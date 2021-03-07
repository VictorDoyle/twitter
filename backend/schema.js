import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    email: String!
    firstname: String
  }
  type Tweet {
    id: ID!
    description: String
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
  }
`;

export default typeDefs;
