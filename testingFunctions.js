function capitalizeString(string) {
    let capChar = string[0].toUpperCase();
    string = string.slice(1);
    capChar = capChar.concat(string);
    return capChar;
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function calculate(a, b) {
    const calculator = {
        add: a + b,
        subtract: a - b,
        divide: a / b,
        multiply: a * b,
    }

    return calculator;
}

function ceasarCipher(string, shift) {
    let cipher = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o",
        15: "p",
        16: "q",
        17: "r",
        18: "s",
        19: "t",
        20: "u",
        21: "v",
        22: "w",
        23: "x",
        24: "y",
        25: "z",
    }

    const cipherLength = Object.keys(cipher).length;

    let stringArray = string.split("");
    // console.log(stringArray);
    let stringArrayInts = [];
    let stringArrayEncoded = [];
    let capitalizedIndex = [];

    // Check for Capital, make capital letters index array
    stringArray.forEach((char) => {
        // console.log(char);
        // console.log(char.toUpperCase());

        if (char === char.toUpperCase()) {
            console.log(char);
            if (char.match(/[;"'.,:!?" "]/)) {
                console.log("punctuation");
                capitalizedIndex.push(0);
            } else {
                console.log("Uppercase!")
                capitalizedIndex.push(1);
            }
        } else {
            console.log("lowerCase!");
            capitalizedIndex.push(0);
        }
    })

    // console.log(capitalizedIndex);

    // Set String Int Values
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < cipherLength; j++) {
            // Check for punctuation and add without conversion if found
            if (stringArray[i].match(/[;"'.,:!?" "]/)) {
                stringArrayInts.push(stringArray[i])
                j += Object.keys(cipher).length;
            }

            if (stringArray[i].toLowerCase() === cipher[j]) {
                // convert char to int
                stringArrayInts.push(j)
                // console.log("Found and Pushed");
                // console.log(stringArray[i]);

                j += Object.keys(cipher).length;
            }
        }
    }

    // console.log(stringArrayInts);

    // Shift Values
    for (let i = 0; i < stringArrayInts.length; i++) {
        // Don't shift if punctuation
        if (!(stringArray[i].match(/[;"'.,:!?" "]/))) {
            stringArrayInts[i] += shift;
        }
    }

    console.log(stringArrayInts);

    // Encode 
    for (let i = 0; i < stringArrayInts.length; i++) {
        for (let j = 0; j < cipherLength; j++) {
            if (stringArray[i].match(/[;"'.,:!?" "]/)) {
                stringArrayEncoded.push(stringArray[i]);
                j += Object.keys(cipher).length;
            } else if (stringArrayInts[i] === j) {
                stringArrayEncoded.push(cipher[j]);
                j += Object.keys(cipher).length;
            }
        }
    }

    // set uppercase
    for (let i = 0; i < capitalizedIndex.length; i++) {
        if (capitalizedIndex[i] === 1) {
            stringArrayEncoded[i] = stringArrayEncoded[i].toUpperCase();
        }
    }

    // set Encoded String
    let encodedString = stringArrayEncoded.join('');

    // console.log(encodedString);

    return encodedString;
}

function analyzeArray(array) {
    return {
        avg: array.reduce((sum, element) => sum + element) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
}

export {
    capitalizeString,
    reverseString,
    calculate,
    ceasarCipher,
    analyzeArray,
}