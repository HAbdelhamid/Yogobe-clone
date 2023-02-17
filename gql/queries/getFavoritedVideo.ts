import { gql } from "@apollo/client";

export const GET_FAVORITE_VIDEOS = gql`
  query getFavorited($id: ID!) {
    getFavoriteVideos(id: $id) {
      data {
        favorited
        id
      }
    }
  }
`;
