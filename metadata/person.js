/**
   Человек работает на конкретные организации в течение какого-то времени
   В одной организации может быть работа над несколькими проектами
   Человек может работать на одну и ту же организацию несколько раз с периодами
   Работник - это аутсорсер - исполнитель конкретной задачи
   Задачу поставляет определённая организация (или группа организаций)
   Проект может быть также инициирован самим разработчиком (опенсорс) -
   в этом случае заказчик - сам разработчик (если по правилам рынка) на безвозмезной основе
   Позиция работника может меняться в течении работы в одной организации
   Работник может выполнять не весь проект, а какой-то модуль (подпроект)
   Работник является участником какого-либо проекта

   Заказчик (я) - Исполнитель (фирма) - Сделка (веб-разработка)

   Сделка: событие
   - перечень проданных товаров/услуг
   - исполнитель
   - заказчик

   Человек работает в организации (ИП на своё имя)
   ИП предоставляет определённый перечень услуг: веб, бд разработка

   Сайт рассказывает об организации ИП (а не о конкретном человеке)
   founder: person
*/

const ImageObject = require('./image-object');

module.exports = {
  // id: { type: 'Integer' },

  // url: { type: 'URL' },

  // Avatar
  image: {
    type: 'Item',
    // http://some-img.jpeg|alt=Welcome|width=200|height=100
    ref: ImageObject,
    schema: 'ImageObject'
  },

  // lastName
  familyName: { type: 'Text' },

  // firstName
  givenName: { type: 'Text' },

  // middleName
  additionalName: { type: 'Text' },

  birthDate: { type: 'Date' }
};

// gender: {
//   type: 'Text'
// },

// description: {
//   type: 'Text'
// },

// jobTitle: {
//   type: 'Text'
// }
