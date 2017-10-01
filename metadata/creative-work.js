/**
 * Work from portfolio
 *   attached to a specific organization
 */

'use strict';

// const LocalBusiness = require('./local-business');
const JobEvent = require('./job-event');
const ImageObject = require('./image-object');
const LocalBusiness = require('./local-business');
const TechArticle = require('./tech-article');

module.exports = {
  headline: { type: 'Text' },

  // Theme
  genre: { type: 'Text' },

  image: {
    type: 'Item',
    ref: ImageObject,
    schema: 'ImageObject'
  },

  datePublished: { type: 'Date' },

  // 50 - 150 symbols
  description: { type: 'Text' },

  sameAs: { type: 'URL' },

  // Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
  keywords: { type: 'Text' },

  // The position of an item in a series or sequence of items
  position: { type: 'Integer' },

  url: { type: 'URLID' },

  // the same as service.provider
  author: {
    type: 'Item',
    ref: LocalBusiness,
    schema: 'HealthAndBeautyBusiness'
  },

  // A resource that was used in the creation of this resource:
  // writing scripts, instruments, technologies etc.
  // For materials - use a property "material"
  // Usually technologies, like programs or methodics
  // Every techonology described by TechArticle entity
  isBasedOn: {
    type: 'ItemList',
    ref: TechArticle,
    schema: 'CreativeWork', // used for short 'info' models
    isHashMap: true
  },

  // period
  recordedAt: {
    type: 'Item',
    ref: JobEvent,
    schema: 'Event'
  }
};

// The Organization on whose behalf the creator was working
// sourceOrganization: {
//   type: 'Item',
//   ref: LocalBusiness,
//   schema: 'LocalBusiness'
// },
