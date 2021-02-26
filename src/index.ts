var express = require("express");

const itemTypeDefs = require("./items/item.type-def");
import { ApolloServer } from "apollo-server-express";
import { itemResolver } from "./items/item.resolver";

var app = express();

const server = new ApolloServer({
  typeDefs: itemTypeDefs,
  resolvers: itemResolver,
});

server.applyMiddleware({ app });

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
