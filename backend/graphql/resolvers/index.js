import tweetResolvers from "./tweets.js";
import usersResolvers from "./users.js";

export default {
  Query: {
    ...tweetResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...tweetResolvers.Mutation,
  },
};
