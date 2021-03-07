import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    email: String!
    firstname: String
    lastname: String
    username: String
    bio: String
    dateOfBirth: String
  }
  type Tweet {
    id: ID!
    description: String
    category: String
    author: User
  }
  # for future
  # type Comment {
  #   id: ID!
  # }
  # type Like {
  #   id: ID
  # }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
  }
`;

export default typeDefs;
