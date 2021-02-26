import { gql } from "apollo-server-express";

const itemTypeDef = gql`
  type Item {
    id: Int
    description: String
    done: Boolean
  }

  type Query {
    list: [Item]
  }
`;

module.exports = itemTypeDef;
