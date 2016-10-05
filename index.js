const Koa = require('koa');

const app = new Koa();
const PORT = process.env.PORT || 8080;

app.use(function *() {
  this.body = 'Hello Aws';
});

app.listen(PORT);

console.log('App listening on port', PORT);