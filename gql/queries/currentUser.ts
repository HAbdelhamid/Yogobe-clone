import { gql } from "@apollo/client";

export const USER = gql`
  query currentUser {
    currentUser {
      accessToken
      accessUntil
      id
      email
      firstName
      favorites {
        videos
      }
    }
  }
`;
