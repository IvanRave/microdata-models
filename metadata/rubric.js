/**
 * A hack for rubric with services (products)
 * https://blog.heppresearch.com/2015/07/09/google-product-rich-snippets-for-multiple-products-on-a-page/
 * http://schema.org/SearchResultsPage
 */

'use strict';

const Offer = require('./offer');

module.exports = {
  // breadcrumb: BreadcrumbList

  name: { type: 'Text' },

  description: { type: 'Text' },

  url: { type: 'URLID' },

  // services + offers
  offers: {
    type: 'ItemList',
    ref: Offer,
    schema: 'Offer',
    isHashMap: true
  }
};
