var _ = require('../../../node_modules/lodash');
var moment = require('../../../node_modules/moment');
var itMomentLocale = require('../../../node_modules/moment/locale/it');

var print = function (data) {
    console.log(JSON.stringify(data, undefined, 2) + '\n');
};

var users = [
    {
        id: 6,
        name: 'Solid Snake',
        sex: 'M',
        birthdate: '01/01/1972'
    },
    {
        id: 4,
        name: 'Meryl Silverburgh',
        sex: 'F',
        birthdate: '01/01/1987'
    },
    {
        id: 9,
        name: 'Liquid Snake',
        sex: 'M',
        birthdate: '01/01/1972'
    },
    {
        id: 11,
        name: 'Frank Jaeger',
        sex: 'M',
        birthdate: '01/01/1951'
    },
    {
        id: 14,
        name: 'Revolver Ocelot',
        sex: 'M',
        birthdate: '06/06/1944'
    },
    {
        id: 18,
        name: 'Sniper Wolf',
        sex: 'F',
        birthdate: '01/01/1983'
    }
];

var workData = [
    {
        userId: 6,
        company: 'Konami',
        startWorkingAt: '8:00',
        stopWorkingAt: '18:00',
        monthSalary:5000,
        firstDayOfWork:"03/09/1998"
    },
    {
        userId: 4,
        company: 'Konami',
        startWorkingAt: '9:00',
        stopWorkingAt: '19:00',
        monthSalary:2500,
        firstDayOfWork:"03/09/1998"
    },
    {
        userId: 9,
        company: 'FOXHOUND',
        startWorkingAt: '14:00',
        stopWorkingAt: '23:00',
        monthSalary:3000,
        firstDayOfWork:"03/01/1995"
    },
    {
        userId: 14,
        company: 'FOXHOUND',
        startWorkingAt: '10:30',
        stopWorkingAt: '17:30',
        monthSalary:10000,
        firstDayOfWork:"23/11/1999"
    },
    {
        userId: 18,
        company: 'FOXHOUND',
        startWorkingAt: '20:30',
        stopWorkingAt: '22:00',
        monthSalary:2000,
        firstDayOfWork:"03/09/2000"
    }
];

var queryHelperFactory = function (users, workdata) {

    //...

    return {
        getAll: getAll,
        getOldest: getOldest,
        getUnemployed:getUnemployed,
        getWhoCanICall:getWhoCanICall,
        getAnnualCostForCompany:getAnnualCostForCompany,
        getHighestSenority:getHighestSenority
    };

};

var queryHelper = queryHelperFactory(users, workData);

print(queryHelper.getAll());
print(queryHelper.getUnemployed());
print(queryHelper.getOldest());
print(queryHelper.getWhoCanICall("9:30"));
print(queryHelper.getWhoCanICall());
print(queryHelper.getHighestSenority('KONAMI'));
print(queryHelper.getAnnualCostForCompany('KONAMI'));
print(queryHelper.getAnnualCostForCompany('FoxHound')); //Case insensitive
