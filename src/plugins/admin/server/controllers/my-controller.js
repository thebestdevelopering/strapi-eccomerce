'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('admin')
      .service('myService')
      .getWelcomeMessage();
  },
};
