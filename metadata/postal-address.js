'use strict';

/**
- https://developers.google.com/schemas/reference/types/PostalAddress
- https://yandex.ru/support/webmaster/supported-schemas/address-organization.xml?lang=ru
*/

module.exports = {
  // TODO: change to country
  addressCountry: {
    type: 'Text',
    label: 'Country'
  },

  addressLocality: {
    type: 'Text',
    label: 'City'
  }

  // streetAddress: {
  //   type: 'Text',
  //   label: 'Street'
  // }
};
