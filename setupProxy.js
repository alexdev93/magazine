// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://magazine-api-pc1b.onrender.com',
      changeOrigin: true,
    })
  );
};
