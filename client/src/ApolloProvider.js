import React from "react";
import App from "./App";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import ApolloClient from "apollo-client";

const httplink = createHttpLink({
  uri: "http://localhost:5000",
});

//add token to each request
const authLink = setContext(() => {
  const token = localStorage.getItem("access-token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
