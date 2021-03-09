import prisma from "@prisma/client";
import { gql } from "apollo-server";
import bcrypt from "bcryptjs";
import generateToken from "./utils/generateToken.js";

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
    # login a user
    signinUser(email: String!, password: String!): Auth
    # create a messages
    createMessage(description: String): Message
  }

  type Auth {
    token: String
    user: User
  }
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
    password: String
    tweets: [Tweet]
    messages: [Message]
    # tweet(id: ID): Tweet
  }
  type Friend {
    id: ID!
    user: User
  }
  type Message {
    id: ID!
    user: User
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
    allMessages: [Message!]!
  }
  type Subscription {
    messageReceived(messageID: ID!): Message
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
    allMessages: () => {
      return db.message.findMany({ include: { user: true } });
    },
  },
  Mutation: {
    signupUser: async (
      parent,
      { email, password, firstname, lastname, dateOfBirth }
    ) => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      password = hash;
      return db.user.create({
        data: {
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
          dateOfBirth: dateOfBirth,
        },
      });
    },
    // this route will give a token if the userand password match
    // signinUser: async (parent, { email, password }) => {
    //   const foundUser = await db.user.findUnique({
    //     where: { email },
    //   });
    //   console.log(foundUser);
    //   if (!foundUser) {
    //     throw new Error("No user found ");
    //   }
    //   const isValid = await bcrypt.compare(password, foundUser.password);
    //   if (!isValid) {
    //     throw new Error("Incorrect password ");
    //   }
    //   if (isValid) {
    //     const token = generateToken(foundUser.id);
    //     return { token, foundUser };
    //   }
    // },
    createMessage: async (parent, args) => {
      return db.message.create({
        data: {
          description: args.description,
        },
      });
    },
  },
};
