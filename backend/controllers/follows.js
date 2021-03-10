import express from "express";
import prisma from "@prisma/client";
const router = express.Router();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

/* Get all follows*/
router.get("/", async function (request, response) {
  const follows = await db.friend.findMany({
    include: {
      user: true,
    },
  });
  console.log(follows);
  response.json({ follows });
});

/* Follows by user on profile*/
router.get("/:userId", async function (request, response) {
  console.log("user id to get follows by id ", request.params.userId);
  const followsByUser = await db.friend.findMany({
    select: {
      user: true,
    },
    where: {
      // request the data from user query
      userId: Number(request.params.userId),
    },
  });
  response.json({ followsByUser });
});

/* Create */

router.post("/", async function (request, response) {
  const createdFollow = await db.friend.create({
    data: request.body,
  });

  response.json({
    message: "The user followed another user",
    like: createdFollow,
  });
});

/* Delete */

router.delete("/delete/:id", async function (request, response) {
  const deletedFollow = await db.friend.delete({
    where: {
      id: Number(request.params.id),
    },
  });

  // message return on create for testing
  response.json({
    message: "the follow has been deleted",
    like: deletedFollow,
  });
});

export default router;
