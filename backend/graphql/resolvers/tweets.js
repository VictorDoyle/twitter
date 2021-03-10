import prisma from "@prisma/client";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allTweets: () => {
      return db.tweet.findMany({ include: { author: true } });
    },
  },
};
