const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]!
  }

  type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Author {
    type: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;