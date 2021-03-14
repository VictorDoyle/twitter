import prisma from "@prisma/client";
import checkAuth from "../../utils/check-auth.js";
import { PubSub } from "apollo-server";

const pubsub = new PubSub();
const messages = [];

const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

export default {
  Query: {
    messages: () => messages,
    /*     messages: async () => {
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
    }, */
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
      subscribers.forEach((fn) => fn());
      return message;
    },
  },
  Subscription: {
    messages: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15);
        onMessagesUpdates(() => pubsub.publish(channel, { messages }));
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel);
      },
    },
  },
};
