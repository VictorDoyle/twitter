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
    take: 10,
    orderBy: [
      {
        id: "desc",
      },
    ],
    include: {
      author: true,
      comments: true,
    },
  });
  let lastPostInResults = tweets[9];
  const myCursor = lastPostInResults.id;
  const tweets1 = await db.tweet.findMany({
    take: 10,
    skip: 1,
    cursor: {
      id: myCursor,
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
    include: {
      author: true,
      comments: true,
    },
  });
  console.log(tweets[2]);
  console.log(tweets1[2]);
  response.json({ tweets, tweets1 });
  lastPostInResults = tweets1[9];
});
/* SHOW ONE TWEET BY ID */
router.get("/:id", async function (request, response) {
  console.log(request);
  const tweet = await db.tweet.findUnique({
    where: {
      id: Number(request.params.id),
    },
    include: {
      author: true,
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

/* SHOW ONE TWEET BY ID */
router.get("/:id", async function (request, response) {
  console.log(request);
  const tweet = await db.tweet.findUnique({
    where: {
      id: Number(request.params.id),
    },

    include: {
      author: true,
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

/* show tweet via Author Id */
router.get("/profile/:authorId", async function (request, response) {
  console.log("REQ PARAMS SHOWING CURRENT USER ID", request.params.authorId);
  const tweetsByAuthor = await db.tweet.findMany({
    select: {
      description: true,
      category: true,
      author: true,
      comments: true,
      createdAt: true,
      /* tweet id */
      id: true,
      likes: true,
    },
    where: {
      // request the data from user query
      authorId: Number(request.params.authorId),
    },
  });
  response.json({ tweetsByAuthor });
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
    message: "the tweet and associated comments have been deleted",
    tweet: deleteTweet,
    comments: deleteAttachedComments,
  });
});

export default router;
