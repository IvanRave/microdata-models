// http://schema.org/ImageObject
// https://yandex.ru/support/webmaster/supported-schemas/image.xml?lang=ru
// https://htmlhook.ru/mikrorazmetka-dlya-izobrazhenij.html
// http://stackoverflow.com/questions/19984221/correct-use-of-schema-org-imageobject

module.exports = {
  // url required for GoogleValidator as a separated property
  // (outside img)
  url: { type: 'URL' },

  width: { type: 'Integer' },

  height: { type: 'Integer' },

  caption: {
    type: 'Text',
    sameAsProperty: 'description'
  },

  contentUrl: {
    type: 'Image',
    computed: ['url', 'width', 'height', 'caption', function(url, width, height, caption) {
      if (!url ||
          !width ||
          !height ||
          !caption) {
        return null;
      }

      return [url, 'width=' + width, 'height=' + height, 'alt=' + caption].join('|');
    }]
  }
};

// thumbnail
