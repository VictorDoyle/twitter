import bcrypt from "bcryptjs";
import generateToken from "../../utils/generateToken.js";
import prisma from "@prisma/client";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allUsers: () => {
      return db.user.findMany({ include: { tweets: true } });
    },
  },
  Mutation: {
    signupUser: async (
      parent,
      { email, password, firstname, lastname, dateOfBirth },
    ) => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      password = hash;
      return db.user.create({
        data: {
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
          dateOfBirth: dateOfBirth,
        },
      });
    },
    // this route will give a token if the userand password match
    // signinUser: async (parent, { email, password }) => {
    //   const foundUser = await db.user.findUnique({
    //     where: { email },
    //   });
    //   console.log(foundUser);
    //   if (!foundUser) {
    //     throw new Error("No user found ");
    //   }
    //   const isValid = await bcrypt.compare(password, foundUser.password);
    //   if (!isValid) {
    //     throw new Error("Incorrect password ");
    //   }
    //   if (isValid) {
    //     const token = generateToken(foundUser.id);
    //     return { token, foundUser };
    //   }
    // },
  },
};
