module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  ...require('./plugins/pug'),
  ...require('./plugins/sort-json'),
  ...require('./plugins/svelte'),
  ...require('./plugins/vue'),
  ...require('./plugins/xml'),
};
