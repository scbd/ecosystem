module.exports = {
  css:{
    extract:true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.cbddev.xyz',
        ws: false,
        changeOrigin: true
      }

    }
  }
}
