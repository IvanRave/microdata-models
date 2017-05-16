// http://schema.org/ImageObject
// https://yandex.ru/support/webmaster/supported-schemas/image.xml?lang=ru
// https://htmlhook.ru/mikrorazmetka-dlya-izobrazhenij.html
// http://stackoverflow.com/questions/19984221/correct-use-of-schema-org-imageobject

module.exports = {
  // url required for GoogleValidator as a separated property
  // (outside img)
  url: {
    type: 'URL',
    label: 'Image url'
  },

  width: {
    type: 'Integer',
    label: 'Image width'
  },

  height: {
    type: 'Integer',
    label: 'Image height'
  },

  caption: {
    type: 'Text',
    label: 'Image caption',
    sameAsProperty: 'description'
  },

  contentUrl: {
    type: 'Image',
    label: 'Image source',
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
