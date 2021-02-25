import express from "express";
import prisma from "@prisma/client";
const router = express.Router();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

/* SECTION: TWEET ROUTES */

/* INDEX FOR ALL TWEETS */
router.get("/", async function (request, response) {
  const tweets = await db.tweet.findMany({
    include: {
      author: true,
    },
  });
  response.json({ tweets });
});

/* SHOW ONE TWEET BY ID */
router.get("/:id", async function (request, response) {
  const tweet = await db.tweet.findUnique({
    where: {
      id: Number(request.params.id),
    },
    include: {
      comments: {
        select: {
          content: true,
          author: true,
          createdAt: true,
        },
      },
    },
  });

  response.json({ tweet });
});

/* CREATE TWEET */

router.post("/", async function (request, response) {
  const createdTweet = await db.tweet.create({
    data: request.body,
  });

  response.json({ message: "The Tweet was created", tweet: createdTweet });
});

/* DELETE ROUTE */

router.delete("/delete/:id", async function (request, response) {
  const deleteTweet = await db.tweet.delete({
    where: {
      id: Number(request.params.id),
    },
  });
  const deleteAttachedComments = await db.comment.deleteMany({
    where: {
      tweetId: Number(request.params.id),
    },
  });

  // message return on create for testing
  response.json({
    message: "the user and their posts have been deleted",
    tweet: deleteTweet,
    comments: deleteAttachedComments,
  });
});

export default router;
