let doDivide = (a,b) => a/b;
const divide = (a,b) => {
    if(b === 0){
        throw new Error('Invalid parameter');
    }

    return doDivide(a,b);
};

/*
 expect in realtà ha un API più complessa del semplice toBe.
 Potete fare asserzioni di vario tipo che vanno dall'esistenza fino al deepEqual
 */

describe('divide', () => {
    it('should correctly divide two numbers', () => {
        const result = divide(2,1);
        expect(result).toBe(2);
    });

    it('should throw when zero is provided as parameter', () => {
        expect(() => {
            divide(2,0);
        }).toThrow();
    });

    describe('use doDivide', () => {
        let done;
        let originalDoDivide;

        beforeEach(() => {
            originalDoDivide = doDivide;
            doDivide = (a,b) => {
                const result = originalDoDivide(a,b);
                done = true;
            }
        });

        it('should use doDivide',() => {
            expect(done).toBeFalsy();
            divide(2,1);
            expect(done).toBeTruthy();
        });

        afterEach(() => {
            done = false;
            doDivide = originalDoDivide;
        })
    })
});