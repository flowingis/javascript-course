const timeDiff = (time) => {
    return Date.now() - time
};

describe('timeDiff', () => {
    let originalNow;

    /*
        before e after sono alla base del mocking. Tenete sempre a mente che JavaScript non è tipato e potete
        cambiare il comporamento delle funzioni a runtime
     */

    beforeAll(() => {
        originalNow = Date.now;
        Date.now = () => 1481278312461;
    });

    it('should calculate the difference between now and the time parameter',() => {
       expect(timeDiff(1481278312460)).toBe(1);
    });

    afterAll(() => {
        Date.now = originalNow;
    })
});