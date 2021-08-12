const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, "secrets");

        return user;
      } catch (err) {
        throw new AuthenticationError("expired token");
      }
    }
    throw new Error("Authorization token not valid");
  }
  throw new Error("Authorization header must be provided");
};
