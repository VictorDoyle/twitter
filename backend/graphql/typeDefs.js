import { gql, PubSub } from "apollo-server";

const typeDefs = gql`
  scalar Date
  type Tweet {
    id: ID!
    description: String
    category: String
    createdAt: String
    author: User
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
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
  type Comment {
    id: ID!
    content: String
    author: User
    tweet: Tweet
  }
  type Like {
    id: ID!
    # author: User
    author: String!
    tweet: Tweet
  }
  # Top level
  type Query {
    allUsers: [User!]!
    allTweets(take: Int, skip: Int, myCursor: Int): [Tweet!]!
    getTweet(tweetId: ID!): Tweet
    messages: [Message!]!
  }
  type Mutation {
    # Create a new User
    signupUser(signupInput: SignupInput): User!
    # login a user
    signinUser(email: String!, password: String!): User!
    # Update user
    updateUser(
      username: String
      firstname: String
      email: String
      bio: String
    ): User
    # create a new tweet
    createTweet(description: String!): Tweet!
    # delete a tweet
    deleteTweet(tweetId: ID!): String!
    # create a messages
    # createMessage(description: String, user: String!): Message!
    # create a comment
    createComment(tweetId: ID!, content: String!, authorId: ID): Tweet!
    # delete a comment
    deleteComment(tweetId: ID!, commentId: ID!): Tweet!
    # like a tweetpo  m
    likePost(tweetId: ID!): Tweet!
  }
  input SignupInput {
    email: String!
    firstname: String!
    lastname: String
    password: String!
    dateOfBirth: String
  }
  # type Subscription {
  # messages: [Message!]
  # }
`;

export default typeDefs;
