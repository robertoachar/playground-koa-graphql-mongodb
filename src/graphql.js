import KoaRouter from 'koa-router';
import graphqlHttp from 'koa-graphql';

import schema from './schema';

const router = KoaRouter();

router.all(
  '/graphql',
  graphqlHttp({
    schema,
    graphiql: true
  })
);

export default router;
