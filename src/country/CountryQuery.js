import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

import Country from './CountryModel';
import CountryType from './CountryType';

const CountryQuery = {
  countries: {
    type: GraphQLList(CountryType),
    resolve: async () => {
      const countries = await Country.find();

      return countries;
    }
  },
  country: {
    type: CountryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, { id }) => {
      const country = await Country.findById(id);

      return country;
    }
  }
};

export default CountryQuery;
