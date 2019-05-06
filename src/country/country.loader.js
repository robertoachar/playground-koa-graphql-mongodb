import DataLoader from 'dataloader';

import Country from './country.model';

const batchCountry = async (keys) => {
  const countries = await Country.find({ _id: { $in: keys } });

  return countries;
};

const loader = new DataLoader((keys) => batchCountry(keys), {
  cacheKeyFn: (key) => key.toString()
});

export default loader;
