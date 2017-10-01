'use strict';

/**
- https://developers.google.com/schemas/reference/types/PostalAddress
- https://yandex.ru/support/webmaster/supported-schemas/address-organization.xml?lang=ru
*/

module.exports = {
  // TODO: change to specificType: Country
  // Name of a country
  addressCountry: { type: 'Text' },

  // Name of a city
  addressLocality: { type: 'Text' }

  // streetAddress: {
  //   type: 'Text'
  // }
};
