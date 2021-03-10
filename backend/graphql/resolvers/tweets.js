import prisma from "@prisma/client";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allTweets: async () => {
      try {
        return db.tweet.findMany({ include: { author: true } });
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
