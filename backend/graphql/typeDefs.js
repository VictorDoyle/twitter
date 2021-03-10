import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Mutation {
    # Create a new User
    signupUser(signupInput: SignupInput): User!
    # login a user
    signinUser(email: String!, password: String!): User!
  }

  input SignupInput {
    email: String!
    firstname: String!
    lastname: String
    password: String!
    dateOfBirth: String
  }

  # type Auth {
  #   token: String
  #   user: User
  # }
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
    # tweet(id: ID): Tweet
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
