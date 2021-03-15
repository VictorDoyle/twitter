import bcrypt from "bcryptjs";
import generateToken from "../../utils/generateToken.js";
import prisma from "@prisma/client";
import { UserInputError } from "apollo-server";

import {
  validateRegisterInput,
  validateLoginInput,
} from "../../utils/validators.js";

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
export default {
  Query: {
    allUsers: async () => {
      try {
        return db.user.findMany({ include: { tweets: true } });
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    signupUser: async (
      parent,
      { signupInput: { email, password, firstname, lastname, dateOfBirth } },
    ) => {
      try {
        const { valid, errors } = validateRegisterInput(
          firstname,
          email,
          password,
        );
        if (!valid) {
          throw new UserInputError("Errors", { errors });
        }
        const user = await db.user.findUnique({ where: { email } });
        if (user) {
          throw new UserInputError("email is taken", {
            errors: {
              email: "This email is taken",
            },
          });
        }
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
      } catch (error) {
        throw new Error(error);
      }
    },
    // this route will give a token if the user and check if password match
    signinUser: async (parent, { email, password }) => {
      const { errors, valid } = validateLoginInput(email, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const foundUser = await db.user.findUnique({
        where: { email },
      });
      console.log(foundUser);
      if (!foundUser) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }
      const isValid = await bcrypt.compare(password, foundUser.password);
      if (!isValid) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }
      const token = generateToken(foundUser.id);
      console.log(token);
      return { ...foundUser, id: foundUser.id, token: token };
    },
  },
};
