/**
 * <img src="" width=123 height=234 alt=My picture>
 * <meta itemprop="width"
 * <span itemprop="description">I took this picture
 *
 * Сущность "Изображение"
 * - ид (юрл)
 * - описание
 *
 * Сущность "Организация"
 * - ид
 * - название
 * - кол-во сотрудников
 */

const Person = require('./person');
const ImageObject = require('./image-object');
const PostalAddress = require('./postal-address');

// https://schema.org/LocalBusiness
module.exports = {
  // company full name
  // name for a Person (individ company): "Service from Person"
  name: { type: 'Text' },

  // Logo
  image: {
    type: 'Item',
    // http://some-img.jpeg|alt=Welcome|width=200|height=100
    ref: ImageObject,
    schema: 'ImageObject'
  },

  address: {
    type: 'Item',
    ref: PostalAddress,
    schema: 'PostalAddress'
  },

  // 2-nd priority link
  urlVk: {
    type: 'URL',
    sameAsProperty: 'sameAs'
  },

  // HeadHunter
  urlHh: {
    type: 'URL',
    sameAsProperty: 'sameAs'
  },

  telephone: { type: 'Telephone' },

  email: { type: 'Email' },

  // link to official web site
  // usually uses URLID instead URL
  // but organizations have no URL in our website
  url: { type: 'URL' },

  founder: {
    type: 'Item',
    ref: Person,
    schema: 'Person'
  }
};

//   // per hour/month/year etc.
// priceRange: {
//   type: 'Text',
// },

// // inverse: offeredBy
// A pointer to products or services offered by the organization
// makesOffer: {
//   type: 'Item',
//   schema: 'Offer',
// },

// Products owned by the organization
// owns: {
//   type: 'ItemList',
//   schema: 'Product', // or OwnershipInfo
// }

// A pointer to products or services sought by the org (demand)
// seeks: {
//   schema: 'Demand',
// }

// legalName

// Upcoming or past event associated with this place, organization, or action. Supersedes events.
