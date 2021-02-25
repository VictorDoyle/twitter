import express from "express";
import prisma from "@prisma/client";
const router = express.Router();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

/* Get all comments*/
router.get("/", async function (request, response) {
  const comments = await db.comment.findMany({
    include: {
      author: true,
    },
  });
  response.json({ comments });
});

/* Single Comment by ID */
router.get("/:id", async function (request, response) {
  const comment = await db.comment.findUnique({
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

  response.json({ comment });
});

/* Create */

router.post("/", async function (request, response) {
  const createdComment = await db.comment.create({
    data: request.body,
  });

  response.json({
    message: "The Comment was created",
    comment: createdComment,
  });
});

/* Delete */

router.delete("/delete/:id", async function (request, response) {
  const deleteComment = await db.comment.delete({
    where: {
      id: Number(request.params.id),
    },
  });

  // message return on create for testing
  response.json({
    message: "the comment has been deleted",
    comment: deleteComment,
  });
});

export default router;
