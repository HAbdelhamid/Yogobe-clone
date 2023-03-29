import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const setAuthorizationLink = setContext(() => ({
  headers: {
    "Accept-Language": "en",
  },
}));

const Link = new HttpLink({
  uri: "http://localhost:3000/api/graphql",
});

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  link: from([setAuthorizationLink, Link]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          videos: {
            keyArgs: [],
            merge(existing = { data: [] }, incoming) {
              return {
                ...incoming,
                data: [...existing.data, ...incoming.data],
              };
            },
          },
          getFavoriteVideos: {
            merge: true,
          },
          video: {
            merge: true,
          },
        },
      },
    },
  }),
});
export default client;
