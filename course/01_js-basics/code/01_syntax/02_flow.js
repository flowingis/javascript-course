var x = 0;

console.log('While');
console.log('................\n');

while (x < 10) {
    console.log(x);
    x++;
}

console.log('\nDo While');
console.log('................\n');

x = 20;

do {
    console.log(x);
    x++;
}while (x < 10);

console.log('\nFor');
console.log('................\n');

for(x = 0;x < 10;x++){
    console.log(x);
}

console.log('\nIf');
console.log('................\n');

x = true;

if(x){
    console.log('Here');
}

console.log('\nIf/Else');
console.log('................\n');

x = false;

if(x){
    console.log('Here');
}else{
    console.log('There');
}

console.log('\nIf/Else if');
console.log('................\n');

x = 3;

if(x == 1){
    console.log('Here');
}else if(x == 2){
    console.log('There');
}else{
    console.log('Far away');
}

console.log('\nSwitch');
console.log('................\n');

switch(x) {
    case 1:
        console.log('Here');
        break;
    case 2:
        console.log('There');
        break;
    default:
        console.log('Far away');
}

console.log('\nAnd/Or');
console.log('................\n');

//And / Or / Not

if(true && false){
    console.log('true && false is true');
}else{
    console.log('true && false is false');
}

if(true || false){
    console.log('true || false is true');
}else{
    console.log('true || false is false');
}

if(!true){
    console.log('!true is true');
}else{
    console.log('!true is false');
}

console.log('\nTry/Catch');
console.log('................\n');

try{
    throw new Error('Oh My God! We are doomed!');
}catch (e){
    console.log(e.message);
}