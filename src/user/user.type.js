import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import CountryLoader from '../country/country.loader';
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
        const country = await CountryLoader.load(user.country);

        return country;
      }
    }
  })
});

export default UserType;
