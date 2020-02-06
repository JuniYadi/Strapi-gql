'use strict';

/**
 * `Debug` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In Debug policy.');

  await next();
};
