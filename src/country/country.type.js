import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    id: {
      type: GraphQLID,
      resolve: (country) => country.id
    },
    name: {
      type: GraphQLString,
      resolve: (country) => country.name
    }
  }
});

export default CountryType;
