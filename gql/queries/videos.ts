import { gql } from "@apollo/client";

const GET_VIDEOS = gql`
  query GetLocations {
    videos {
        data {
          id
          thumbnailUrl
          meta {
            minutes
          }
          taxonomies {
            flavor {
              name
            }
          }
          content {
            title
            shortDescription
          }
        }
    }
  }
`;


export default GET_VIDEOS;