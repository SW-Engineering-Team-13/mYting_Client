const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: '../../mYting_API/backend/public',

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})
