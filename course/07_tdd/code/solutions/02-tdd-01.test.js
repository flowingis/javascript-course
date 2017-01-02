const { isPrimeNumber,firstPrimeNumbers } = require('./code/primeNumber');

describe('isPrimeNumber', () => {
    it('should return false if the value is 0',() => {
        expect(isPrimeNumber(0)).toBe(false);
    });

    it('should return true if the value is 1',() => {
        expect(isPrimeNumber(1)).toBe(false);
    });

    it('should return false if the value is 2',() => {
        expect(isPrimeNumber(2)).toBe(true);
    });

    it('should return true if the value is 4',() => {
        expect(isPrimeNumber(4)).toBe(false);
    });

    it('should return false if the value is less than zero',() => {
        expect(isPrimeNumber(-1)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        expect(isPrimeNumber()).toBe(false);
    });

    describe('firstPrimeNumbers', () => {
        it('should return an empty array with a zero limit',() => {
            expect(firstPrimeNumbers(0)).toEqual([]);
        });

        it('should return an array with 2 if limit is 1',() => {
            expect(firstPrimeNumbers(1)).toEqual([2]);
        });

        it('should return an empty array if limit with less than zero', () => {
            expect(firstPrimeNumbers(-1)).toEqual([]);
        });

        it('should return an array with a length equal to the limit',() => {
            const result = firstPrimeNumbers(100);
            expect(result.length).toBe(100);
        });

        it('should return an array with all prime numbers',() => {
            const result = firstPrimeNumbers(5);
            expect(isPrimeNumber(result[0])).toBe(true);
            expect(isPrimeNumber(result[1])).toBe(true);
            expect(isPrimeNumber(result[2])).toBe(true);
            expect(isPrimeNumber(result[3])).toBe(true);
            expect(isPrimeNumber(result[4])).toBe(true);
        });
    })
});