const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/Service', {
    target: 'http://m.mtime.cn',
    changeOrigin: true,
  }));
  app.use(proxy('/api', {
    target: 'https://ticket-m.mtime.cn',
    changeOrigin: true,
  }));
  app.use(proxy('/cinema', {
    target: 'https://ticket-api-m.mtime.cn',
    changeOrigin: true,
  }));
};
