var _ = require('../../../../node_modules/lodash');

var print = function(data){
    console.log("data = ", JSON.stringify(data, undefined, 2) + '\n');
};

var users = [
    {
        id:6,
        name:'Solid Snake',
        sex:'M'
    },
    {
        id:4,
        name:'Meryl Silverburgh',
        sex:'F'
    },
    {
        id:9,
        name:'Liquid Snake',
        sex:'M'
    },
    {
        id:11,
        name:'Frank Jaeger',
        sex:'M'
    },
    {
        id:14,
        name:'Revolver Ocelot',
        sex:'M'
    },
    {
        id:18,
        name:'Sniper Wolf',
        sex:'F'
    }
];

print(users);

//Each
console.log('Each');
console.log('................\n');

_.each(users,function(user,index){
    console.log(index, user.name);
});

//Map
console.log('\nMap');
console.log('................\n');

var newUsers = _.map(users,function(user,index){
   return {
       id:index,
       name:user.name.toLowerCase()
   };
});

print(newUsers);

//Reduce
console.log('Reduce');
console.log('................\n');

var veryLongName = _.reduce(users,function (name,user) {
    return name + user.name + " / ";
},"Very Long name - ");

console.log(veryLongName);

//OrderBy
console.log('\nOrderBy');
console.log('................\n');
var orderedUsers = _.orderBy(users,['sex','-name']);

print(orderedUsers);


//Filter
console.log('Filter');
console.log('................\n');

var females = _.filter(users,{sex:"F"});

print(females);

var highIds = _.filter(users,function (user) {
   return user.id > 10;
});

print(highIds);

//Find
console.log('Find');
console.log('................\n');

var aFemale = _.find(users,{sex:"F"});

print(aFemale);


//Flatten
console.log('Flatten');
console.log('................\n');
console.log(_.flatten([
    1,
    [
        2,
        3
    ]
]));

//Without
console.log('\nWithout');
console.log('................\n');

var toCheck = [1,2,3,4,5,6,7];
console.log(_.without(toCheck,1,7));
