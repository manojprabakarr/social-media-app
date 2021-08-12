const { ApolloServer } = require("apollo-server");

const connectdb = require("./utils/db");
const typeDefs = require("./graphql/typedef");
const resolvers = require("./graphql/resolvers/server");

require("dotenv").config({
  path: "config/config.env",
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
//database
connectdb();

const PORT = process.env.PORT || 5000;

server.listen({ port: PORT }).then((res) => {
  console.log(`Server is listening on port ${res.url}`);
});
