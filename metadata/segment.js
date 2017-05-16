'use strict';

const LocalBusiness = require('./local-business');
const Offer = require('./offer');
const City = require('./city');

// https://schema.org/Service
module.exports = {
  // serviceType from provider name
  name: {
    type: 'Text',
    label: 'Title'
  },

  // Segment name, like http://www.gs1.org/gpc/browser
  category: {
    type: 'Text',
    label: 'Service category' // GPC or Google Product Taxonomy
  },

  description: {
    type: 'Text',
    label: 'Description'
  },

  areaServed: {
    type: 'ItemList',
    label: 'Area served',
    ref: City,
    schema: 'City',
    isHashMap: true
  },

  url: {
    type: 'URLID',
    label: 'URL'
  },

  provider: {
    type: 'Item',
    label: 'Provider',
    schema: 'LocalBusiness',
    ref: LocalBusiness
  },

  hasOfferCatalog: {
    type: 'ItemList',
    label: 'Offer catalog',
    schema: 'Offer',
    ref: Offer,
    isHashMap: false
  }
};

// An OfferCatalog is an ItemList that contains related Offers
// and/or further OfferCatalogs that are offeredBy the same provider.
// OfferCatalog inherits ItemList
