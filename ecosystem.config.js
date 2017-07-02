module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'url-shortener',
      script    : 'index.js',
      env: {
        COMMON_VARIABLE: 'true',
        MONGO_URI: '',
        SECRET: ''
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

  ]

};
