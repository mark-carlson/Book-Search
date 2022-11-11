import { gql } from "@apollo/client";
//removeBook??
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username:String!, $email:String!,password:String!){
  addUser(username:$username,email:$email, password:$password){
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $description: String!
    $bookId: String!
    $image: String!
    $link: String!
    $title: String!
  ) {
    saveBook(
      description: $description
      bookId: $bookId
      image: $image
      link: $link
      title: $title
    ) {
      _id
      description
      bookId
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql``;
