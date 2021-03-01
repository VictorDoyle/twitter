import express from "express";
import prisma from "@prisma/client";
const router = express.Router();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

/* Get all likes*/
router.get("/", async function (request, response) {
  const likes = await db.like.findMany({
    include: {
      author: true,
      tweetId: true,
    },
  });
  response.json({ likes });
});

/* Single Like by ID */
router.get("/:id", async function (request, response) {
  const like = await db.like.findUnique({
    where: {
      id: Number(request.params.id),
    },
    include: {
      tweets: {
        select: {
          description: true,
          author: true,
          createdAt: true,
        },
      },
    },
  });

  response.json({ like });
});

/* Create */

router.post("/", async function (request, response) {
  const createdLike = await db.like.create({
    data: request.body,
  });

  response.json({
    message: "The user Liked a Tweet",
    like: createdLike,
  });
});

/* Delete */

router.delete("/delete/:id", async function (request, response) {
  const deletedLike = await db.like.delete({
    where: {
      id: Number(request.params.id),
    },
  });

  // message return on create for testing
  response.json({
    message: "the like has been deleted",
    like: deletedLike,
  });
});

export default router;
