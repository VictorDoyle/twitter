import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import prisma from "@prisma/client";
import generateToken from "../utils/generateToken.js";
import dotenv from "dotenv";

dotenv.config();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

const register = async (request, response) => {
  try {
    const foundUser = await db.user.findUnique({
      where: {
        email: request.body.email,
        /* phone: request.body.phone */
        /* dob: request.body.dob */
      },
    });

    if (foundUser) {
      response.json({ message: "the User already exists", user: foundUser });
    }

    const salt = await bcrypt.genSalt(10);
    // takes each character and turns it into multiple random characters
    const hash = await bcrypt.hash(request.body.password, salt);
    request.body.password = hash;
    // create user with req.body and hashed password
    const createdUser = await db.user.create({
      data: { ...request.body, password: hash },
    });
    console.log(createdUser);
    return response
      .status(201)
      .json({ status: 201, message: "success", createdUser });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// POST Login Route
/**
 * @desc AUTH USER & TOKEN
 * @route POST API/LOGIN
 * @access PUBLIC
 */
const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    const foundUser = await db.user.findUnique({
      where: { email },
    });
    console.log(foundUser);
    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!foundUser || !isMatch) {
      return response.json({ message: "Email or Password incorrect" });
    }

    if (isMatch) {
      response.status(200).json({
        status: 200,
        message: "Success",
        user: foundUser,
        username: foundUser.username,
        profile: foundUser.profile,
        id: foundUser.id,
        token: generateToken(foundUser.id),
      });
    } else {
      return response.status(400).json({
        status: 400,
        message: "Incorrect login!",
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// POST Logout Route
const logout = (request, response) => {
  // TODO: Remove the JWT via react.
};

export { register, login, logout };
