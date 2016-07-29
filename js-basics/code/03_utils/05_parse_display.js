var moment = require('../../../node_modules/moment');
var itMomentLocale = require('../../../node_modules/moment/locale/it');

//Locales
moment.locale('it');

//Now
console.log('Now');
console.log('................\n');
var date = new Date();

var now1 = moment();
var now2 = moment(date);

console.log(now1.toDate());
console.log(now2.toDate());

//Parse
console.log('Parse');
console.log('................\n');

var date1 = moment("01/01/2016","DD/MM/YYYY");
var date2 = moment("01/02/2016","MM/DD/YYYY");

console.log(date1.toDate());
console.log(date2.toDate());

//Parse Time
console.log('Parse Time');
console.log('................\n');

var date1 = moment("12:30:45","HH:mm:ss");

console.log(date1.toDate());

//Format
console.log('Format');
console.log('................\n');

var date = moment("01/01/2016 12:30:45","DD/MM/YYYY HH:mm:ss");

console.log(date.format("dddd MMMM Do YYYY"));

//Localized
console.log(date.format("LLLL"));
console.log(date.format("llll"));

//Unix Timestamp
console.log('Unix Timestamp');
console.log('................\n');

var TIMESTAP_1ST_JAN_2017 = 1483225200;

date = moment.unix(TIMESTAP_1ST_JAN_2017);
console.log(date.format("LLLL"));
console.log(date.unix());