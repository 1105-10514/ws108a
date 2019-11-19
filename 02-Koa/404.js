const Koa = require('koa');

const app = module.exports = new Koa();

app.use(async function pageNotFound(ctx) {      //  404=找不到請求資源   200=請求成功
 
  ctx.status = 404
});

if (!module.parent) app.listen(3000);
