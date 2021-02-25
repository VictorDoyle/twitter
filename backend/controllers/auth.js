import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import prisma from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

  

const register = async (request, response) => {
  console.log(request.body)
    try {
      const foundUser = await db.user.findUnique({
        where: {
            email: request.body.email,
            /* phone: request.body.phone */
             /* dob: request.body.dob */
        }})
        
        if (foundUser) {
          response.json({message: "the User already exists", user: foundUser })
        }
        
      const salt = await bcrypt.genSalt(10);
      // takes each character and turns it into multiple random characters
      const hash = await bcrypt.hash(request.body.password, salt);
      request.body.password = hash;
      // create user with req.body and hashed password
      const createdUser = await db.user.create({ data: {...request.body, password: hash } });
  
      return response
        .status(201)
        .json({ status: 201, message: "success", createdUser });
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
      });
    }
  };
  
  // POST Login Route
  const login = async (request, response) => {
    try {
      const foundUser = await db.user.findUnique({ 
        where: {email: request.body.email }
      });
  
      console.log(foundUser);
  
      if (!foundUser) {
        return response.json({message: "Email or Password incorrect"});
      }
  
      const match = await bcrypt.compare(request.body.password, foundUser.password);
  
      if (!match) {
        return response.json({message: "Email or Password incorrect"});
      }
  
      const isMatch = await bcrypt.compare(request.body.password, foundUser.password);
  
      if (isMatch) {
        //TODO create a json web token
        const signedJwt = await jwt.sign(
          {
            id: foundUser.id,
          },
          process.env.jwtsecret, 
          {
            expiresIn: "1d",
          }
        );
  
        return response.status(200).json({
          status: 200,
          message: "Success",
          user: foundUser,
          username: foundUser.username,
          profile: foundUser.profile,
          id: foundUser.id,
          signedJwt,
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
  
export { register, login, logout};