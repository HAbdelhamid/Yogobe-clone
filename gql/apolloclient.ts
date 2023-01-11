import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({  
    link: new HttpLink({
      uri: 'https://devenv.yogobe.com/graphql',
      fetchOptions: {
        mode: 'no-cors'
      }
  }),
    cache: new InMemoryCache(),
  });

export default client
