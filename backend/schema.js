import { gql } from "apollo-server";

const typeDefs = gql`
  type Tweet {
    id: ID!
    description: String
    category: String
    author: User
  }
  type User {
    id: ID!
    email: String!
    firstname: String
    lastname: String
    username: String
    bio: String
    dateOfBirth: String
    tweets: [Tweet]
  }
  # for future
  # type Comment {
  #   id: ID!
  # }
  # type Like {
  #   id: ID
  # }
  # Top level
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
  }
`;

export default typeDefs;
