import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

import CountryQuery from './country/CountryQuery';
import CountryMutation from './country/CountryMutation';
import UserQuery from './user/UserQuery';
import UserMutation from './user/UserMutation';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'Hello GraphQL Query';
        }
      },
      ...CountryQuery,
      ...UserQuery
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'Hello GraphQL Mutation';
        }
      },
      ...CountryMutation,
      ...UserMutation
    })
  })
});

export default Schema;
