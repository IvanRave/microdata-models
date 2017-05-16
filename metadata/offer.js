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
  price: {
    type: 'Number',
    label: 'Price value'
  },

  priceCurrency: {
    // TODO: change to currency: ISO 4217
    type: 'Text',
    label: 'Currency'
  },

  // ANN, MON, WEE, DAY, HUR
  unitCode: {
    type: 'Text', // UN/CEFACT Common Code (3 characters)
    label: 'Unit'
  }
};

module.exports = {
  name: {
    type: 'Text',
    label: 'Title'
  },

  description: {
    type: 'Text',
    label: 'Description'
  },

  // service
  itemOffered: {
    type: 'Item',
    label: 'ItemOffered',
    ref: Service,
    schema: 'Service'
  },

  priceSpecification: {
    type: 'Item',
    label: 'Make an order',
    ref: UnitPriceSpecification,
    schema: 'UnitPriceSpecification'
  },

  priceValidUntil: {
    type: 'Date',
    label: 'Price valid until'
  },

  eligibleRegion: {
    // standard: ISO 3166-1
    type: 'Text',
    label: 'Eligible region'
  },

  url: {
    type: 'URLID',
    label: 'Offer URL'
  }

  // itemCondition
  // warranty
  // businessFunction: // default: Sell
  // category: {
  //   type: 'Text',
  //   label: 'A category of the offer' // 'database', 'API', 'mobile'
  // },

  // itemOffered // Product/Service

  // offeredBy // inverse: makesOffer

  // price
  // priceCurrency
};
