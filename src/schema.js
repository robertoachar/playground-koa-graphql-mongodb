import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'Hello GraphQL Query';
        }
      }
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
      }
    }
  })
});

export default Schema;
