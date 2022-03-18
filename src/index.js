'use strict';

// const product = require('../database/old/products.json');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  //
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap() {
    // const entries = await strapi.entityService.findMany('api::product.product');
    // if (entries.length === 0) {
    //   // const date = new Date().toISOString();
    //   product.forEach(async (object) => {
    //     await strapi.entityService.create('api::product.product', {
    //       data: {
    //         name: object.product_name,
    //         description: object.product_description,
    //         price: object.product_msrp,
    //         slug: object.product_code,
    //         sku: object.product_type,
    //         hits: object.product_hit,
    //         // publishedAt: date,
    //       },
    //     });
    //   });
    // }
  },
};
