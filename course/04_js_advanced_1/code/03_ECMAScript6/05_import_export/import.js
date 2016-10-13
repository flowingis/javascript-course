/*
    Per utilizzare un named export basta utilizzare l'object destructuring visto in precedenza.
    Il nome deve essere identico a quello definito nell'export
 */
import {object} from './exports';
import {object2} from './exports';

/*
    Per i default export invece posso utilizzare il nome che voglio.
 */
import add from './exports';

console.log(object);
console.log(object2);
console.log(add(1));