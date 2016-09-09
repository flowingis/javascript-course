var moment = require('../../../../node_modules/moment');
var itMomentLocale = require('../../../../node_modules/moment/locale/it');

//Locales
moment.locale('it');

var start = moment("15/06/2016","DD/MM/YYYY");
var end = moment("16/01/2017","DD/MM/YYYY");

//Difference
console.log('Difference');
console.log('................\n');

//Milliseconds
console.log(start.diff(end));
console.log(end.diff(start));

//Days
console.log(end.diff(start,'days'));
console.log(end.diff(start,'years'));

//From / To
console.log('\nFrom / To');
console.log('................\n');

console.log(start.fromNow());
console.log(end.fromNow());

console.log(start.toNow());
console.log(end.toNow());

//Start / End
console.log('\nStart / End');
console.log('................\n');

console.log(moment(start).startOf('week').format('DD/MM/YYYY'));
console.log(moment(start).startOf('month').format('DD/MM/YYYY'));
console.log(moment(start).startOf('year').format('DD/MM/YYYY'));

console.log(moment(start).endOf('week').format('DD/MM/YYYY'));
console.log(moment(start).endOf('month').format('DD/MM/YYYY'));
console.log(moment(start).endOf('year').format('DD/MM/YYYY'));

//Add / Substract
console.log('\nAdd Substract');
console.log('................\n');

console.log(moment(start).add(1,'day').format('DD/MM/YYYY'));
console.log(moment(start).add(1,'week').format('DD/MM/YYYY'));
console.log(moment(start).add(10,'years').format('DD/MM/YYYY'));

console.log(moment(start).subtract(1,'day').format('DD/MM/YYYY'));
console.log(moment(start).subtract(1,'week').format('DD/MM/YYYY'));
console.log(moment(start).subtract(10,'years').format('DD/MM/YYYY'));

//Query
console.log('\nQuery');
console.log('................\n');

console.log(start.isBefore(end));
console.log(start.isAfter(end));
console.log(start.isSame(end,'year'));

var toCheck = moment("31/12/2016","DD/MM/YYYY");

console.log(toCheck.isBetween(start,end));


//Duration
console.log('\nDuration');
console.log('................\n');

var diff = end.diff(start);

var duration = moment.duration(diff);

console.log(duration.humanize());
console.log(duration.asHours() + " ore");
console.log(duration.asSeconds() + " secondi");