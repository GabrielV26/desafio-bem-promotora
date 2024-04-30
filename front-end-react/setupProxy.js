const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Endereço do seu backend ASP.NET Core
      changeOrigin: true,
    })
  );
};
