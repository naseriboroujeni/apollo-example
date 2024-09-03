import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('http://localhost:4000');

const query = gql`
   query GetBooks {
      books {
         title
         author
      }
   }
`;
const results = await graphQLClient.request(query);

console.log(results);
