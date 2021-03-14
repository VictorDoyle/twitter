import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

export default {
  Query: {
    messages: async () => {
      try {
        return db.message.findMany({
          orderBy: [
            {
              id: "desc",
            },
          ],
        });
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createMessage: async (parent, args) => {
      console.log(args);
      const message = await db.message.create({
        data: {
          description: args.description,
          user: args.user,
        },
      });
      return message;
    },
  },
};
