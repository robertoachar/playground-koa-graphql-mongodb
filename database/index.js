import mongoose from 'mongoose';

import config from '../src/config';
import logger from '../src/logger';

import Country from '../src/country/CountryModel';
import User from '../src/user/UserModel';

import countries from './countries';
import users from './users';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);
mongoose.connection.on('connected', () => {
  logger.info('Mongoose connected!');
});
mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose disconnected!');
  process.exit(1);
});
mongoose.connection.on('error', (err) => {
  logger.info('Mongoose Error!', err);
  process.exit(1);
});

(async () => {
  await Country.remove();
  await Country.insertMany(countries);

  await User.remove();
  await User.insertMany(users);

  process.exit(0);
})();
