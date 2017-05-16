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
  name: {
    type: 'Text',
    label: 'Company'
  },

  image: {
    type: 'Item',
    // http://some-img.jpeg|alt=Welcome|width=200|height=100
    label: 'Logo',
    ref: ImageObject,
    schema: 'ImageObject'
  },

  address: {
    type: 'Item',
    label: 'Address',
    ref: PostalAddress,
    schema: 'PostalAddress'
  },

  // 2-nd priority link
  urlVk: {
    type: 'URL',
    label: 'VK',
    sameAsProperty: 'sameAs'
  },

  urlHh: {
    type: 'URL',
    label: 'HeadHunter',
    sameAsProperty: 'sameAs'
  },

  telephone: {
    type: 'Telephone',
    label: 'Telephone'
  },

  email: {
    type: 'Email',
    label: 'Email'
  },

  // link to official web site
  // usually uses URLID instead URL
  // but organizations have no URL in our website
  url: {
    type: 'URL',
    label: 'URL'
  },

  founder: {
    type: 'Item',
    label: 'Founder',
    ref: Person,
    schema: 'Person'
  }

  // priceRange: {
  //   type: 'Text',
  //   // per hour/month/year etc.
  //   label: 'Price range'
  // },

  // // inverse: offeredBy
  // makesOffer: {
  //   type: 'Item',
  //   schema: 'Offer',
  //   label: 'A pointer to products or services offered by the organization'
  // },

  // owns: {
  //   type: 'ItemList',
  //   schema: 'Product', // or OwnershipInfo
  //   label: 'Products owned by the organization'
  // }

  // seeks: {
  //   schema: 'Demand',
  //   label: 'A pointer to products or services sought by the org (demand)'
  // }

  // legalName

  // Upcoming or past event associated with this place, organization, or action. Supersedes events.
  // event: {
  //   type: '
  // }
};
