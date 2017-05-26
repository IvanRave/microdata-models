/**
 * A part of an article - subheader with content
 * schema: Article
 * Used in CreativeWork.basedOn.hasPart property
 * - no description (only articleBody)
 * - no other parts
 */

'use strict';

module.exports = {
  // required by https://developers.google.com/search/docs/data-types/articles
  headline: {
    type: 'Text',
    label: 'Name'
  },

  articleBody: {
    type: 'Multitext',
    label: 'Content'
  },

  // Images should be at least 696 pixels wide.
  //  image: // Tech logo

  // required

  // publisher
  // datePublished
  // author

  // some associated link
  sameAs: {
    type: 'URL',
    label: 'Link to technology'
  },

  // like a main-url + #hash
  url: {
    type: 'URLID',
    label: 'URL'
  }
};
