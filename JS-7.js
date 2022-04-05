
//Zad_1

//Tablica liczb
const arrayOfNumbers = [1, 2, 3, 4, 5];

//Funkcja klasyczna
function getSquaredNumbers(numbersArray) {
    const squaredArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        squaredArray.push(numbersArray[i] * numbersArray[i]);
    }
    return squaredArray;
}

//Funkcja map
function getSquaredNumbers(numbersArray) {
    return numbersArray.map(x => x * x);
}


//Zad_2 - Problem
function getInitials(stringText) {
    const initials = '';
    if (typeof stringText === 'string') {
        const words = stringText.trim().split(' ');


    }
    return null
}

//Zad_3

const firstArrayOfNumbers = [1, 25, -1, 127, -99, 12];
const firstSmallestNumber = getSmallestNumber(firstArrayOfNumbers);
console.log(firstSmallestNumber); // -99

const secondArray = [12, 66, null, 'Hello'];
const secondSmallestNumber = getSmallestNumber(secondArray);
console.log(secondSmallestNumber); // null

function getSmallestNumber(arrayOfNumbers) {
    let smallestNumber;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentElement = arrayOfNumbers[i];
        if (smallestNumber === undefined || currentElement < smallestNumber) {
            smallestNumber = currentElement;
        }
    }
    return smallestNumber;
}

//Problem z funkcją (nie zwraca prawidłowych wartości)
function isArrayAllNumerical(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (typeof arrayOfNumbers[i] !== 'number') {
            return null;
        } else if (typeof arrayOfNumbers[i] === 'number') {
            return 'it is all numbers';
        }
    }
}



//Zad_4 - nie wiem (wiem tylko, że będzie loop oraz funkcja mapująca)
const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

function countLetters(string) {
    const countedLetters = {};
    const unitedString = string.toLowerCase().split(' ').join('');
    for (let i =0; i < unitedString.length; i++) {

    }
}


//Zad_5 - działa

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
]

getAgeDifference(peopleArray); // 70

function getAgeDifference(people) {
    return getOldestPerson(people) - getYoungestPerson(people);
}

function getYoungestPerson(people) {
    let youngestAge;
    for (let i = 0; i < people.length; i++) {
        const currentElement = people[i].age;
        if (youngestAge === undefined || currentElement < youngestAge) {
            youngestAge = currentElement;
        }
    }
    return youngestAge;
}

function getOldestPerson(people) {
    let oldestAge;
    for (let i = 0; i < people.length; i++) {
        const currentElement = people[i].age;
        if (oldestAge === undefined || currentElement > oldestAge) {
            oldestAge = currentElement;
        }
    }
    return oldestAge;
}