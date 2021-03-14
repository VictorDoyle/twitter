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
    messages: [Message]
    tweets: [Tweet]
  }
  type Friend {
    id: ID!
    user: User
  }
  type Message {
    id: ID!
    user: String!
    description: String
    createdAt: String
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
    messages: [Message!]!
  }
  type Mutation {
    # Create a new User
    signupUser(signupInput: SignupInput): User!
    # login a user
    signinUser(email: String!, password: String!): User!
    # create a new tweet
    createTweet(description: String!): Tweet!
    # delete a tweet
    deleteTweet(tweetId: ID!): String!
    # create a messages
    createMessage(user: String!, description: String!): Message!
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
