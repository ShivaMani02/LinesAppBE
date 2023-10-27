'use strict';

/**
 * news-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-data.news-data');
