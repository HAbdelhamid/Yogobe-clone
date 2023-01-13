import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          videos: {
            // keyArgs: ["perPage"],
            keyArgs: [],

            // merge(existing, incoming) {
            //   console.log("Hi", { existing, incoming });
            //   const response = {
            //     ...incoming,
            //     data: [...(existing?.data || []), ...incoming.data],
            //   };
            //   console.log(response);
            //   return response;
            // },
            merge(existing = { data: [] }, incoming) {
              console.log("Hi", { existing, incoming });

              return {
                ...incoming,
                data: [...existing.data, ...incoming.data],
              };
            },
          },
        },
      },
      // PagedVideos: {
      //   // Don't cache separate results based on
      //   // any of this field's arguments.
      //   // keyArgs: [],
      //   // Concatenate the incoming list items with
      //   // the existing list items.
      //   // merge(existing, incoming) {
      //   //   console.log("Hi", { existing, incoming });
      //   //   const response = {
      //   //     ...incoming,
      //   //     page: incoming.page,
      //   //     data: [...(existing?.data || []), ...incoming.data],
      //   //   };
      //   //   console.log(response);
      //   //   return response;
      //   // },
      // },
    },
  }),
});
export default client;
