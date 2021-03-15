import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      // splits token
      token = req.headers.authorization.split(" ")[1];
      // checks JWT and gets useID
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

// Below is basically the same but isnt middleware intended for apollo server
// https://www.howtographql.com/graphql-js/6-authentication/
const getTokenPayload = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const getUserId = (req, authToken) => {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        throw new Error("No token found");
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error("Not authenticated");
};

export { protect, getUserId };
