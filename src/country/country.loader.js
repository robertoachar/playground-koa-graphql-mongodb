import DataLoader from 'dataloader';

import Country from './country.model';

const loader = new DataLoader((keys) => {
  return Country.find({ _id: { $in: keys } });
});

export default loader;
