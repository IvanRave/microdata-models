/**
 * A part of an article - subheader with content
 * schema: Article
 * Used in CreativeWork.basedOn.hasPart property
 * - no description (only text)
 * - no other parts
 */

'use strict';

const SourceCode = require('./source-code');

module.exports = {
  // required by https://developers.google.com/search/docs/data-types/articles
  headline: { type: 'Text' },

  // Yandex required 'description' or 'articleBody'
  //  If Article, Google requires many other fields
  // Used 'description' instead 'text' or 'articleBody'
  description: { type: 'Text' },

  // Content
  text: { type: 'Multitext' },

  exampleOfWork: {
    type: 'Item',
    ref: SourceCode,
    schema: 'SoftwareSourceCode'
  },

  // Images should be at least 696 pixels wide.
  //  image: // Tech logo

  // some associated link, e.g. Link to technology
  sameAs: { type: 'URL' },

  // like a main-url + #hash
  url: { type: 'URLID' }
};
