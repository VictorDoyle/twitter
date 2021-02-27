import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../prisma/schema.prisma";

dotenv.config();

const protect = async (req, res, next) => {
  let token;
  // console.log(req.headers);
  console.log(req.body);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = await db.user.findById(decodedToken.id).select("-password");
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error("Not Authorized, Token Invalid");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized");
  }
};

export { protect };
