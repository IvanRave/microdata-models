/**
 * Associative entity between CreativeWork and Resource (Instrument/Technology)
 * Used in CreativeWork.basedOn property
 */

module.exports = {
  // required by https://developers.google.com/search/docs/data-types/articles
  headline: {
    type: 'Text',
    label: 'Name'
  },

  // content summarize in 150 symbols
  description: {
    type: 'Text',
    label: 'Description'
  },

  text: {
    type: 'Text',
    label: 'Content'
  },

  keywords: {
    type: 'Text',
    label: 'Keywords'
  },

  // Images should be at least 696 pixels wide.
  //  image: // Tech logo

  // required

  // publisher
  // datePublished
  // author

  sameAs: {
    type: 'URL',
    label: 'Link to technology'
  },

  url: {
    type: 'URLID',
    label: 'URL'
  }
};
