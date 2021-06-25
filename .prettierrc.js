module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,

  ...require('./plugins/jsdoc'),
  ...require('./plugins/pug'),
  ...require('./plugins/sort-json'),
  ...require('./plugins/svelte'),
  ...require('./plugins/xml'),
};
