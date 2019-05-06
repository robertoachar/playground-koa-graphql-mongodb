import KoaRouter from 'koa-router';

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

router.get('/healthz', async (ctx) => {
  ctx.status = 200;
});

export default router;
