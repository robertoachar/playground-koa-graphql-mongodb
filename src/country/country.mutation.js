import { GraphQLNonNull, GraphQLString } from 'graphql';

import Country from './country.model';
import CountryType from './country.type';
import {
  CountryCreateInputType,
  CountryUpdateInputType
} from './country.input';

const CountryMutation = {
  createCountry: {
    type: CountryType,
    args: {
      input: {
        type: GraphQLNonNull(CountryCreateInputType)
      }
    },
    resolve: async (root, { input }) => {
      const country = new Country({
        name: input.name
      });

      await country.save();

      return country;
    }
  },
  deleteCountry: {
    type: CountryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, { id }) => {
      const country = await Country.findOneAndRemove({ _id: id });

      return country;
    }
  },
  updateCountry: {
    type: CountryType,
    args: {
      input: {
        type: GraphQLNonNull(CountryUpdateInputType)
      }
    },
    resolve: async (root, { input }) => {
      const country = Country.findOneAndUpdate(
        { _id: input.id },
        { name: input.name },
        { new: true }
      );

      return country;
    }
  }
};

export default CountryMutation;
