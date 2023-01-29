import { gql } from "@apollo/client";
// TODO: update query by adding filter.
// look for available args within the videos query,
// see if you can find anything that can be used for search/filter
// test in playground
// category, type, name, instructor ...... pick one -> test
const GET_VIDEOS = gql`
  query getvideos($page: Int, $perPage: Int, $query: String) {
    videos(page: $page, perPage: $perPage, query: $query) {
      page
      perPage
      totalCount
      data {
        id
        thumbnailUrl
        meta {
          minutes
        }
        taxonomies {
          genre {
            name
            slug
          }
          instructors {
            name
          }
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
