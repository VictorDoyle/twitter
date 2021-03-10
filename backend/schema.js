// import prisma from "@prisma/client";

// const db = new prisma.PrismaClient({
//   log: ["info", "warn"],
//   errorFormat: "pretty",
// });

// export const resolvers = {
//   Query: {
//     allUsers: () => {
//       return db.user.findMany({ include: { tweets: true } });
//     },
//     allTweets: () => {
//       return db.tweet.findMany({ include: { author: true } });
//     },
//   },

//   },
// };
