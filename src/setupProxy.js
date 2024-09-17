
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://135.237.65.229:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding to server
      },
    })
  );
};
