var x = 0;

//While
while (x < 10) {
    console.log(x);
    x++;
}

console.log("---");

//Do While
x = 20;

do {
    console.log(x);
    x++;
}while (x < 10);

console.log("---");

//For
for(x = 0;x < 10;x++){
    console.log(x);
}

console.log("---");

//If
x = true;

if(x){
    console.log('Here');
}

console.log("---");

//If Else
x = false;

if(x){
    console.log('Here');
}else{
    console.log('There');
}

console.log("---");

//If Else If
x = 3;

if(x == 1){
    console.log('Here');
}else if(x == 2){
    console.log('There');
}else{
    console.log('Far away');
}

console.log("---");

//Switch
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

console.log("---");

//Try/Catch
try{
    throw new Error('Oh My God! We are doomed!');
}catch (e){
    console.log(e.message);
}