/**
 * Customer
 *   - id
 *   - name
 *   - order[]
 *     - id
 *     - offer
 *       - id
 *       - service/product
 *         - id
 *         - name
 */

'use strict';

const Offer = require('./offer');

module.exports = {
  // the same as for Offer and Product|Service
  url: {
    type: 'URLID',
    label: 'URL'
  },

  acceptedOffer: {
    type: 'Item',
    label: 'Offer',
    ref: Offer,
    schema: 'Offer'
  },

  orderDate: {
    type: 'Date',
    label: 'Order date'
  },

  description: {
    type: 'Text',
    label: 'Order description'
  }
};
