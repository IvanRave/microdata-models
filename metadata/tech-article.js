/**
 * Associative entity between CreativeWork and Resource (Instrument/Technology)
 * TechArticle
 * Used in CreativeWork.basedOn property
 */

'use strict';

const ArticleParagraph = require('./article-paragraph');
const LocalBusiness = require('./local-business');
const ImageObject = require('./image-object');

module.exports = {
  // required by https://developers.google.com/search/docs/data-types/articles
  headline: { type: 'Text' },

  datePublished: { type: 'Date' },

  dateModified: { type: 'Date' },

  // content summarize in 150 symbols
  description: { type: 'Text' },

  // TODO: to specific type: Lang
  inLanguage: { type: 'Text' },

  // Images should be at least 696 pixels wide.
  image: {
    type: 'Item',
    ref: ImageObject,
    schema: 'ImageObject'
  },

  // Proficiency needed for this content; expected values: 'Beginner', 'Expert'
  proficiencyLevel: { type: 'Text' },

  // Prerequisites needed to fulfill steps in article
  // MultiText - Array of text strings
  dependencies: { type: 'Multitext' },

  // instead of articleBody
  // Article separated to parts (description + h2 headers)
  hasPart: {
    type: 'ItemList',
    schema: 'CreativeWork',
    ref: ArticleParagraph,
    isHashMap: true
  },

  keywords: { type: 'Text' },

  author: {
    type: 'Item',
    ref: LocalBusiness,
    schema: 'LocalBusiness'
  },

  // publisher
  // author

  sameAs: { type: 'URL' },

  url: { type: 'URLID' }
};
