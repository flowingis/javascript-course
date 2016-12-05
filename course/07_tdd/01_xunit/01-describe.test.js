/*
    describe e it servono per creare la struttura del report dei vostri test. In questo caso l'outcome è il seguente
        outer
            inner
                first
            inner again
                second

    si può inoltre utilizzare il comando 'only' per forzare l'esecuzione di un solo test/suite

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