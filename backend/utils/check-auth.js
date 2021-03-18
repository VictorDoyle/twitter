import { AuthenticationError } from "apollo-server";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const checkAuth = (context) => {
  // context = { ... headers }
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    console.log("auth Header", authHeader);
    // Bearer ....
    const token = authHeader.split(" ")[1];
    // const token = authHeader.replace("Bearer ", "");
    // needed regex because the token was not removing last quote
    // const unQ = token.replace(/["]+/g, "");
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        // const user = await db.user.findUnique({ where: checkedToken.id });
        // console.log(user);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};

export default checkAuth;
