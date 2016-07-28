var _ = require('../../../node_modules/lodash');

//Cases
console.log('Cases');
console.log('................\n');

var TEMPLATE = "This is a test";

console.log(_.camelCase(TEMPLATE));
console.log(_.kebabCase(TEMPLATE));
console.log(_.snakeCase(TEMPLATE));
console.log(_.startCase(TEMPLATE));
console.log(_.lowerFirst(TEMPLATE));
console.log(_.capitalize(TEMPLATE.toLowerCase()));

//Repeat
console.log('Repeat');
console.log('................\n');

console.log(_.repeat('*',10));

//Replace
console.log('Replace');
console.log('................\n');

var TEMPLATE = "I'm testing a test in testland";

console.log(_.replace(TEMPLATE,new RegExp("test","g"),"pizza"));

//Template
console.log('Template');
console.log('................\n');

var TEMPLATE = "hello <%= data %>!";

var compiled = _.template(TEMPLATE);
console.log(compiled({ data: 'Folks' }));
