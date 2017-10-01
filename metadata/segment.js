'use strict';

const LocalBusiness = require('./local-business');
const Offer = require('./offer');
const City = require('./city');

// https://schema.org/Service
module.exports = {
  // serviceType from provider name
  name: { type: 'Text' },

  // Segment name, like http://www.gs1.org/gpc/browser
  // GPC or Google Product Taxonomy
  category: { type: 'Text' },

  description: { type: 'Text' },

  areaServed: {
    type: 'ItemList',
    ref: City,
    schema: 'City',
    isHashMap: true
  },

  url: { type: 'URLID' },

  provider: {
    type: 'Item',
    schema: 'LocalBusiness',
    ref: LocalBusiness
  },

  hasOfferCatalog: {
    type: 'ItemList',
    schema: 'Offer',
    ref: Offer,
    isHashMap: false
  }
};

// An OfferCatalog is an ItemList that contains related Offers
// and/or further OfferCatalogs that are offeredBy the same provider.
// OfferCatalog inherits ItemList
