/**
 * An offer to transfer some rights to an item or to provide a service
 * - to sell tickets to an event
 * - to rent the DVD of a movie
 * - to stream a TV show over the Internet
 * - to repair a motorcycle
 * - to loan a book
 * One product (service) can have many offers (from different providers)
 * An offer - assiciative entity between a service and a provider organizaation
 */

'use strict';

const Service = require('./service');

const UnitPriceSpecification = {
  price: { type: 'Number' },

  // TODO: change to specific type: ISO 4217
  priceCurrency: { type: 'Text' },

  // UN/CEFACT Common Code (3 characters)
  // ANN, MON, WEE, DAY, HUR
  unitCode: { type: 'Text' }
};

module.exports = {
  name: { type: 'Text' },

  description: { type: 'Text' },

  // service
  itemOffered: {
    type: 'Item',
    ref: Service,
    schema: 'Service'
  },

  priceSpecification: {
    type: 'Item',
    ref: UnitPriceSpecification,
    schema: 'UnitPriceSpecification'
  },

  priceValidUntil: { type: 'Date' },

  // standard: ISO 3166-1
  eligibleRegion: { type: 'Text' },

  // overseedes Service.url (as name and description)
  url: { type: 'URLID' }

  // itemCondition
  // warranty
  // businessFunction: // default: Sell
  // category: {
  //   type: 'Text',
  // 'database', 'API', 'mobile'
  // },
};
