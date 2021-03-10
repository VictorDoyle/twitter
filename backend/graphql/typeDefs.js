import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date
  type Tweet {
    id: ID!
    description: String
    category: String
    createdAt: String
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
    token: String
    password: String
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
    getTweet(tweetId: ID!): Tweet
  }
  type Mutation {
    # Create a new User
    signupUser(signupInput: SignupInput): User!
    # login a user
    signinUser(email: String!, password: String!): User!
    createTweet(description: String!): Tweet!
    deleteTweet(tweetId: ID!): String!
  }

  input SignupInput {
    email: String!
    firstname: String!
    lastname: String
    password: String!
    dateOfBirth: String
  }
`;

export default typeDefs;
