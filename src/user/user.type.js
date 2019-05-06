import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import Country from '../country/country.model';
import CountryType from '../country/country.type';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (user) => user.id
    },
    name: {
      type: GraphQLString,
      resolve: (user) => user.name
    },
    country: {
      type: CountryType,
      resolve: async (user) => {
        const country = await Country.findById(user.country);

        return country;
      }
    }
  })
});

export default UserType;