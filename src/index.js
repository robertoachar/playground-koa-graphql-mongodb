import mongoose from 'mongoose';

import app from './app';
import config from './config';
import logger from './logger';

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

app.listen(config.PORT, () => {
  Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
});
