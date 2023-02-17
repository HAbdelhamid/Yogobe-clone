import { gql } from "@apollo/client";

export const ADD_FAVORITE = gql`
  mutation addFavoritedVideo($videoId: ID!) {
    addFavoriteVideo(videoId: $videoId) {
      video {
        favorited
        id
      }
    }
  }
`;
