import tweetResolvers from "./tweets.js";
import usersResolvers from "./users.js";

import commentsResolvers from "./comments.js";

export default {
  Query: {
    ...tweetResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...tweetResolvers.Mutation,

    ...commentsResolvers.Mutation,
  },
  /*   Subscription: {
    ...messagesResolvers.Subscription,
  }, */
};
