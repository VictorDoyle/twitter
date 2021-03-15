import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

export default {
  Query: {
    allMessages: () => {
      return db.message.findMany({ include: { user: true } });
    },
  },
  Mutation: {
    createMessage: async (parent, args) => {
      return db.message.create({
        data: {
          description: args.description,
        },
      });
    },
  },
};
