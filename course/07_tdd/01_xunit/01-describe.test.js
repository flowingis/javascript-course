/*
    describe e it servono per creare la struttura del report dei vostri test. In questo caso l'outcome è il seguente
        outer
            inner
                first
            inner again
                second

 */
describe('outer', () => {
    describe('inner', () => {
        it('first', () => {

        });

        describe('inner again', () => {
            it('second', () => {

            });
        });
    });
});