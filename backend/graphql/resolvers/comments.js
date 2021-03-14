import { AuthenticationError, UserInputError } from "apollo-server";
import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Mutation: {
    createComment: async (_, { tweetId, content }, context) => {
      const { id } = checkAuth(context);
      if (content.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            content: "Comment body must not empty",
          },
        });
      }
      const tweet = await db.tweet.findUnique({
        where: { id: Number(tweetId) },
        include: { author: true },
      });
      if (tweet) {
        const comment = tweet.comments.unshift({
          content,
          author: id,
          createdAt: new Date().toISOString(),
        });
        // need to save to data base with create having a brain fart
        return await db.comment.create(comment);
      } else throw new UserInputError("Tweet not found");
    },
    //  Delete Route for Comment
    async deleteComment(_, { tweetId, commentId }, context) {
      const { id } = checkAuth(context);

      const tweet = await db.tweet.findUnique(tweetId);

      if (tweet) {
        const commentIndex = tweet.comments.findIndex(
          (c) => c.id === commentId,
        );

        if (tweet.comments[commentIndex].id === id) {
          tweet.comments.splice(commentIndex, 1);
          // await tweet.save();
          // return tweet;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Tweet not found");
      }
    },
  },
};
