import { gql } from "@apollo/client";

export const DELETE_FAVORITED_VIDEOS = gql`
  mutation deleteFavoriteVideo($videoId: ID!) {
    deleteFavoriteVideo(videoId: $videoId) {
      video {
        favorited
      }
    }
  }
`;
