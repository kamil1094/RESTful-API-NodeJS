const _ = require('lodash');

let config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  // 10 days in minutes
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT || 'gumball'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

let envConfig;

try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch (error) {
    envConfig = {};
}

module.exports = _.merge(config, envConfig);