const add = (a,b) => a+b;

/*
    possiamo usare la parola expect per creare una expecation
    se la condizione definita dal'expect.

    Se vogliamo exludere un test dalla suite possiamo utilizzare la parola chiave skip

    Se invece vogliamo eseguire esclusivamente un singolo test per controllare una issue
    si può utilizzare la funzione fit
 */

describe('add', () => {
    it('should add correctly', () => {
        const result = add(1,2);
        expect(result).toBe(3)
    });

    it('should add correctly', () => {
        const result = add(1,2);
        expect(result).toBe(4)
    });
});