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
      tweet: {
        select: {
          likes: true,
          comments: true,
          description: true,
          author: true,
          id: true,
        },
      },
    },
  });
  
  response.json({ likes });
});

/* Single Like by ID */
/* router.get("/:id", async function (request, response) {
  console.log(request)
  const like = await db.like.findUnique({
    where: {
      id: Number(request.params.id),
    },
    include: {
          author: true,
          tweet: true,
    },
  });

  response.json({ like });
}); */


/* Likes by Author on profile*/
router.get("/:authorId", async function (request,response){
  console.log("user id to get likes by id ", request.params.authorId)
  const likesByAuthor = await db.like.findMany({
      select: {
          author: true,
          createdAt: true,
          /* tweet id */
          id: true,
      },
      where: {
              // request the data from user query
              authorId: Number(request.params.authorId)
              
          
      }
  });
  response.json({ likesByAuthor });
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
  console.log(request.params, "PARAMS FOR DELETE LIKE")
  console.log(request.headers, "REQ DOT HEADERS FOR LIKE DELETE")
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
