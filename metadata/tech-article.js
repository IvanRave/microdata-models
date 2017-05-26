/**
 * Associative entity between CreativeWork and Resource (Instrument/Technology)
 * TechArticle
 * Used in CreativeWork.basedOn property
 */

'use strict';

const ArticleParagraph = require('./article-paragraph');

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
    schema: 'Article',
    ref: ArticleParagraph,
    isHashMap: true
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
