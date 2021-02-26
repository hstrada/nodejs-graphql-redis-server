var express = require("express");
var { graphqlHTTP } = require("express-graphql");

const itemTypeDefs = require("./items/item.type-def");
import { makeExecutableSchema } from "apollo-server-express";
import { itemResolver } from "./items/item.resolver";

const schema = makeExecutableSchema({
  typeDefs: itemTypeDefs,
  resolvers: itemResolver,
});

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
