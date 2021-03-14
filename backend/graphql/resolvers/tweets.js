import { AuthenticationError, UserInputError } from "apollo-server";
import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allTweets: async () => {
      try {
        return db.tweet.findMany({
          skip: 1,
          take: 10,
          orderBy: [
            {
              id: "desc",
            },
          ],
          include: { author: true },
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    getTweet: async (_, { tweetId }) => {
      try {
        const tweet = await db.tweet.findUnique({
          where: { id: Number(tweetId) },
          include: { author: true },
        });
        if (tweet) {
          return tweet;
        } else {
          throw new Error("tweet not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createTweet(_, { description }, context) {
      const user = checkAuth(context);
      console.log(user);
      if (description.trim() === "") {
        throw new Error("Tweet description must not be empty");
      }

      const newTweet = await db.tweet.create({
        data: {
          description: description,
          authorId: Number(user.id),
          // username: user.username,
          createdAt: new Date().toISOString(),
        },
      });
      return newTweet;
    },
    async deleteTweet(_, { tweetId }, context) {
      const user = checkAuth(context);
      // auth for user to only be able to delete their tweets
      try {
        const tweet = await db.tweet.delete({
          where: {
            id: Number(tweetId),
          },
        });
        if (user.id === tweet.authorId) {
          return "Tweet deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
