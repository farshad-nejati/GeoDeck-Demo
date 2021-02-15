import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  //   uri: 'example.com',
  cache: new InMemoryCache(),
});

export default client;
