module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '고대리꼬치',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          '//dapi.kakao.com/v2/maps/sdk.js?appkey=479617c5d20a5ea8f0fe8ee20514f575',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  modules: ['bootstrap-vue/nuxt'],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3031',
  },
};
