import { AuthenticationError, UserInputError } from "apollo-server";
import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allTweets: async (_, { take, skip, myCursor }) => {
      // const alltweets = await db.tweet.findMany({});
      // const allTweetsCount = alltweets.length;
      try {
        const opArgs = {
          take: take,
          skip: skip,
          cursor: {
            id: myCursor,
          },
          include: { author: true },
          orderBy: [
            {
              createdAt: "desc",
            },
          ],
        };
        // console.log(returned);
        return await db.tweet.findMany(opArgs);
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * Get a tweet for pagination
     *  */
    lastTweets: async (_, args) => {
      try {
        const allTweets = await db.tweet.findFirst({
          orderBy: {
            id: "desc",
          },
        });
        return allTweets;
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * Get A tweet
     *  */
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
    /**
     * Create A tweet
     *  */
    async createTweet(_, { description }, context) {
      const user = checkAuth(context);
      if (description.trim() === "") {
        throw new Error("Tweet description must not be empty");
      }
      try {
        const newTweet = await db.tweet.create({
          data: {
            description: description,
            authorId: user.id,
            // username: user.username,
            createdAt: new Date().toISOString(),
          },
        });
        return newTweet;
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * Delete A tweet
     *  */
    async deleteTweet(_, { tweetId }, context) {
      const user = checkAuth(context);
      try {
        const tweet = await db.tweet.findUnique({
          where: { id: Number(tweetId) },
          include: { author: true },
        });
        console.log(tweet);
        if (user.id === tweet.authorId) {
          const deletedTweet = await db.tweet.delete({
            where: {
              id: Number(tweetId),
            },
          });
          //NOTE if we want to delete the comments also here is the logic have not tested
          /* const deleteAttachedComments = await db.comment.deleteMany({
            where: {
              tweetId: tweetId,
            },
          }); */
          return deletedTweet /* , deleteAttachedComments */;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
