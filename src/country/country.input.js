import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

const CountryCreateInputType = new GraphQLInputObjectType({
  name: 'CountryCreateInputType',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

const CountryUpdateInputType = new GraphQLInputObjectType({
  name: 'CountryUpdateInputType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

export { CountryCreateInputType, CountryUpdateInputType };
