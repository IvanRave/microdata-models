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
  headline: {
    type: 'Text',
    label: 'Name'
  },

  datePublished: {
    type: 'Date',
    label: 'Published'
  },

  dateModified: {
    type: 'Date',
    label: 'Modified'
  },

  // content summarize in 150 symbols
  description: {
    type: 'Text',
    label: 'Description'
  },

  // Images should be at least 696 pixels wide.
  image: {
    type: 'Item',
    label: 'Image',
    ref: ImageObject,
    schema: 'ImageObject'
  },

  // Proficiency needed for this content; expected values: 'Beginner', 'Expert'
  proficiencyLevel: {
    type: 'Text',
    label: 'Proficiency level'
  },

  // Prerequisites needed to fulfill steps in article
  // MultiText - Array of text strings
  dependencies: {
    type: 'Multitext',
    label: 'Dependencies'
  },

  // instead of articleBody
  // Article separated to parts (description + h2 headers)
  hasPart: {
    type: 'ItemList',
    label: 'Content',
    schema: 'CreativeWork',
    ref: ArticleParagraph,
    isHashMap: true
  },

  keywords: {
    type: 'Text',
    label: 'Keywords'
  },

  author: {
    type: 'Item',
    label: 'Author',
    ref: LocalBusiness,
    schema: 'LocalBusiness'
  },

  // publisher
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
