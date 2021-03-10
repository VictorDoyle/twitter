import prisma from "@prisma/client";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allTweets: async () => {
      try {
        return db.tweet.findMany({
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
  },
};
