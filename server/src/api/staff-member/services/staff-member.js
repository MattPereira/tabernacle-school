'use strict';

/**
 * staff-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staff-member.staff-member');
