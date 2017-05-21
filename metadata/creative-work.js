'use strict';

// const LocalBusiness = require('./local-business');
const JobEvent = require('./job-event');
const ImageObject = require('./image-object');
const LocalBusiness = require('./local-business');
const WorkResource = require('./work-resource');

module.exports = {
  headline: {
    type: 'Text',
    label: 'Project'
  },

  genre: {
    type: 'Text',
    label: 'Theme'
  },

  image: {
    type: 'Item',
    label: 'image',
    ref: ImageObject,
    schema: 'ImageObject'
  },

  datePublished: {
    type: 'Date',
    label: 'Published'
  },

  // 50 - 150 symbols
  description: {
    type: 'Text',
    label: 'Description'
  },

  sameAs: {
    type: 'URL',
    label: 'Project url'
  },

  // Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
  keywords: {
    type: 'Text',
    label: 'Techs'
  },

  // The position of an item in a series or sequence of items
  position: {
    type: 'Integer',
    label: 'Position'
  },

  url: {
    type: 'URLID',
    // URL identifier
    label: 'URL'
  },

  // the same as service.provider
  author: {
    type: 'Item',
    label: 'Author',
    ref: LocalBusiness,
    schema: 'HealthAndBeautyBusiness'
  },

  // A resource that was used in the creation of this resource:
  // writing scripts, instruments, technologies etc.
  // For materials - use a property "material"
  isBasedOn: {
    type: 'Item',
    label: 'Is based on',
    ref: WorkResource,
    schema: 'CreativeWork',
    isHashMap: true
  },

  recordedAt: {
    type: 'Item',
    label: 'Period',
    ref: JobEvent,
    schema: 'Event'
  }
};

// The Organization on whose behalf the creator was working
// sourceOrganization: {
//   type: 'Item',
//   label: 'Source organization',
//   ref: LocalBusiness,
//   schema: 'LocalBusiness'
// },
