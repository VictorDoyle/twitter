import tweetResolvers from "./tweets.js";
import usersResolvers from "./users.js";
import messagesResolvers from "./messages.js";

export default {
  Query: {
    ...tweetResolvers.Query,
    ...usersResolvers.Query,
    ...MessagesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...tweetResolvers.Mutation,
    ...messagesResolvers.Mutation,
  },
};
