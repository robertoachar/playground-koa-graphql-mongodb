import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

import CountryQuery from './country/country.query';
import CountryMutation from './country/country.mutation';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'Hello GraphQL Query';
        }
      },
      ...CountryQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'Hello GraphQL Mutation';
        }
      },
      ...CountryMutation
    }
  })
});

export default Schema;
