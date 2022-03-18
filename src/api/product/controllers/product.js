"use strict";

/**
 *  product controller
 */

// function beta() {
//   const createCoreController = require("@strapi/strapi").factories;

//   const {
//     productController,
//   } = require("../../../../database/old/products.json");
//   console.log(createCoreController);
//   if (createCoreController) {
//     return createCoreController;
//   } else {
//     return productController;
//   }
// }
// console.log(beta());

// , ({ strapi }) => ({
//     async product() {
//       try {
//         if (productController) {
//           return productController;
//         } else {
//           return productController;
//         }
//       } catch (err) {
//         return err;
//       }
//     },
//   })
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product");
