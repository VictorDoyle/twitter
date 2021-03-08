import prisma from "@prisma/client";
import { gql } from "apollo-server";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

export const typeDefs = gql`
  scalar Date

  type Mutation {
    # Create a new User
    signupUser(
      email: String!
      firstname: String!
      lastname: String
      password: String!
      dateOfBirth: String
    ): User!
  }
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

export const resolvers = {
  Query: {
    allUsers: () => {
      return db.user.findMany({ include: { tweets: true } });
    },
    allTweets: () => {
      return db.tweet.findMany({ include: { author: true } });
    },
  },
  Mutation: {
    signupUser: (parent, args) => {
      return db.user.create({
        data: {
          email: args.email,
          firstname: args.firstname,
          lastname: args.lastname,
          password: args.password,
          dateOfBirth: args.dateOfBirth,
        },
      });
    },
  },
};
