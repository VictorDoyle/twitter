// import prisma from "@prisma/client";
// import { gql } from "apollo-server";
// import bcrypt from "bcryptjs";
// import generateToken from "./utils/generateToken.js";

// const db = new prisma.PrismaClient({
//   log: ["info", "warn"],
//   errorFormat: "pretty",
// });

// export const typeDefs = gql`
//   scalar Date

//   type Mutation {
//     # Create a new User
//     signupUser(
//       email: String!
//       firstname: String!
//       lastname: String
//       password: String!
//       dateOfBirth: String
//     ): User!
//     # login a user
//     signinUser(email: String!, password: String!): Auth

//   }

//   type Auth {
//     token: String
//     user: User
//   }
//   type Tweet {
//     id: ID!
//     description: String
//     category: String
//     createdAt: String
//     author: User
//   }
//   type User {
//     id: ID!
//     email: String!
//     firstname: String
//     lastname: String
//     username: String
//     bio: String
//     dateOfBirth: String
//     password: String
//     tweets: [Tweet]
//     # tweet(id: ID): Tweet
//   }

//   # for future
//   # type Comment {
//   #   id: ID!
//   # }
//   # type Like {
//   #   id: ID
//   # }
//   # Top level
//   type Query {
//     allUsers: [User!]!
//     allTweets: [Tweet!]!
//   }

// `;

// export const resolvers = {
//   Query: {
//     allUsers: () => {
//       return db.user.findMany({ include: { tweets: true } });
//     },
//     allTweets: () => {
//       return db.tweet.findMany({ include: { author: true } });
//     },

//   },
//   Mutation: {

//   },
// };
