import { capitalizeString, reverseString, calculate, ceasarCipher, analyzeArray } from './testingFunctions.js';

test('returns first letter of string capitalized', () => {
    let string = "hello";
    expect(capitalizeString(string)).toBeTruthy()
})

test('return string reversed', () => {
    let string = 'hello';
    expect(reverseString(string) === 'olleh').toBeTruthy();
})

test('return added a + b', () => {
    let a = 5;
    let b = 2;
    expect(calculate(a, b).add).toBe(7);
})

test('return subtracted a - b', () => {
    let a = 5;
    let b = 2;
    expect(calculate(a, b).subtract).toBe(3);
})

test('return divided a / b', () => {
    let a = 10;
    let b = 2;
    expect(calculate(a, b).divide).toBe(5);
})

test('return multiply a * b', () => {
    let a = 5;
    let b = 2;
    expect(calculate(a, b).multiply).toBe(10);
})

test('return ceasar ciphered shift 1+', () => {
    let string = "ceasar";
    let key = 1;
    expect(ceasarCipher(string, key)).toBe("dfbtbs");
})

test('return ceasar ciphered shift 1+ w/ punctuation', () => {
    let string = "ceasar, cipher";
    let key = 1;
    expect(ceasarCipher(string, key)).toBe("dfbtbs, djqifs");
})

test('return ceasar ciphered shift 1+ w/ punctuation & Caps', () => {
    let string = "Ceasar, Cipher";
    let key = 1;
    expect(ceasarCipher(string, key)).toBe("Dfbtbs, Djqifs");
})


test('return object w/ avg of array', () => {
    let array = [1,8,3,4,2,6];
    expect(analyzeArray(array).avg).toBe(4);
})
test('return object w/ min value of array', () => {
    let array = [1,8,3,4,2,6];
    expect(analyzeArray(array).min).toBe(1);
})
test('return object w/ max value of array', () => {
    let array = [1,8,3,4,2,6];
    let object = {
        avg: 4, 
        min: 1,
        max: 8,
        length: 6,
    }
    expect(analyzeArray(array).max).toBe(8);
})
test('return object w/ length of array', () => {
    let array = [1,8,3,4,2,6];
    let object = {
        avg: 4, 
        min: 1,
        max: 8,
        length: 6,
    }
    expect(analyzeArray(array).length).toBe(6);
})