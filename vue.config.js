module.exports = {
  // 选项...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.77.212.147:9797',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/sms': {
        target: 'http://146.56.171.243:5000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/sms': ''
        }
      }
    },
  }
}
