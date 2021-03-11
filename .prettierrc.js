module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  ...require('./plugins/pug.js'),
  ...require('./plugins/sort-json.js'),
  ...require('./plugins/svelte.js'),
  ...require('./plugins/vue.js'),
  ...require('./plugins/xml.js'),
};
