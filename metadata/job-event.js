'use strict';

// const PostalAddress = require('./postal-address');
const LocalBusiness = require('./local-business');

// http://schema.org/Event
module.exports = {
  startDate: { type: 'Date' },

  endDate: { type: 'Date' },

  // duration, position
  name: { type: 'Text' },

  // it can duplicate the parent project URL
  url: { type: 'URLID' },

  // Remote or in office
  location: {
    type: 'Item',
    ref: LocalBusiness,
    schema: 'LocalBusiness' // inheritted from Place
  }
};


/**
Необходимо указать значение для поля location.
Thing – недопустимый тип целевого объекта для свойства location.
(no simple Text)
Необходимо указать значение для поля name.
Необходимо указать значение для поля url.
Рекомендуется заполнять поле description.
Рекомендуется заполнять поле eventStatus.
Рекомендуется заполнять поле image.
Рекомендуется заполнять поле offers.
*/
