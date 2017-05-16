/**
 * A hack for rubric with services (products)
 * https://blog.heppresearch.com/2015/07/09/google-product-rich-snippets-for-multiple-products-on-a-page/
 * http://schema.org/SearchResultsPage
 */

'use strict';

const Offer = require('./offer');

module.exports = {
  // breadcrumb: BreadcrumbList

  name: {
    type: 'Text',
    label: 'Title'
  },

  description: {
    type: 'Text',
    label: 'Description'
  },

  url: {
    type: 'URLID',
    label: 'URL'
  },

  offers: {
    type: 'ItemList',
    label: 'Services',
    ref: Offer,
    schema: 'Offer',
    isHashMap: true
  }
};
