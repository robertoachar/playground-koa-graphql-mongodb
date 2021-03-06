import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import graphql from './graphql';
import router from './router';

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use(graphql.routes(), graphql.allowedMethods());

export default app;
