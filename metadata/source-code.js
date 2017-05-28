/**
 * A part of an article-paragraph - code example
 * schema: SoftwareSourceCode
 *
 * Used in CreativeWork.exampleOfWork
 */

'use strict';

module.exports = {
  // required by https://developers.google.com/search/docs/data-types/articles
  headline: {
    type: 'Text',
    label: 'Name'
  },

  // Yandex required 'description' or 'articleBody'
  //  If Article, Google requires many other fields
  // Used 'description' instead 'text' or 'articleBody'
  description: {
    type: 'Text',
    label: 'Description'
  },

  text: {
    type: 'Code',
    label: 'Content'
  },

  programmingLanguage: {
    type: 'Text',
    label: 'Programming language'
  }
};
