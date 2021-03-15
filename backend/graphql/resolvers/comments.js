import { AuthenticationError, UserInputError } from "apollo-server";
import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";
// import { v4 as uuidv4 } from "uuid";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Mutation: {
    createComment: async (_, { tweetId, content }, context) => {
      try {
        if (content.trim() === "") {
          throw new UserInputError("Empty comment", {
            errors: {
              content: "Comment body must not empty",
            },
          });
        }
        const foundTweet = await db.tweet.findUnique({
          where: { id: Number(tweetId) },
          include: { author: true, comments: true },
        });
        const { id } = checkAuth(context);
        if (!id || !foundTweet) {
          throw new Error("Unable to find user and tweet");
        }

        const comment = {
          // id: uuidv4(),
          content: content,
          authorId: Number(id),
          tweetId: Number(tweetId),
          createdAt: new Date().toISOString(),
        };
        const newComment = await db.comment.create({
          data: comment,
        });

        // db.comment.push(comment);
        // pubsub.publish(`comment ${args.data.tweets}`, {
        //   comment: {
        //     mutation: "CREATED",
        //     data: comment,
        //   },
        // });

        return newComment;
      } catch (error) {
        throw new Error(err);
      }
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
