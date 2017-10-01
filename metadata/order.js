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
  url: { type: 'URLID' },

  acceptedOffer: {
    type: 'Item',
    ref: Offer,
    schema: 'Offer'
  },

  orderDate: { type: 'Date' },

  description: { type: 'Text' }
};
