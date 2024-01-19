const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);
//2. Get array of all heights
const heights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const minifiedCharacters = characters.map((character) => ({ name: character.name, height: character.height }));
//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0]);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((mass, character) => {
    return mass + character.mass;
}, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((heights, character) => heights + character.height, 0);
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((eyeColors, character) => {
    let eyeColor = character.eye_color;
    if (eyeColors[eyeColor] == undefined) eyeColors[eyeColor] = 0;
    eyeColors[eyeColor]++;
    return eyeColors;
}, {})
//4. Get total number of characters in all the character names
const charactersCounter = characters.reduce((sum, character) => {
    let nameLength = character.name.split(" ").join("").length;
    return sum + nameLength;
}, 0);
//***FILTER***
//1. Get characters with mass greater than 100
const heavyMass = characters.filter(character => character.mass > 100);
//2. Get characters with height less than 200
const mediumHeight = characters.filter(character => character.height < 200);
//3. Get all male characters
const males = characters.filter(character => character.gender == "male");
//4. Get all female characters
const females = characters.filter(character => character.gender == "female");
//***SORT***
//1. Sort by mass
const sortedByMass = characters.sort((a, b) => {
    return a.mass - b.mass;
});
//2. Sort by height
const sortedByHeight = characters.sort((a, b) => {
    return a.mass - b.mass;
})
//3. Sort by name
const sortedByName = characters.sort((character1, character2) => {
    const FIRST_LETTER = 0;
    if (character1.name[FIRST_LETTER] < character2.name[FIRST_LETTER]) return -1;
    else return 1;
})
//4. Sort by gender
const sortedByGender = characters.sort((character1, characters2) => {
    const FIRST_LETTER = 0;
    if (character1.gender[FIRST_LETTER] < characters2.gender[FIRST_LETTER]) return -1;
    return 1;
})
//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color == "blue");
//2. Does every character have mass more than 40?
const allMassOverForty = characters.every((character) => character.mass > 40);
//3. Is every character shorter than 200?
const allShortPpl = characters.every((character) => character.height < 200);
//4. Is every character male?
const allMales = characters.every((character) => character.gender == "male");
//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = characters.some((character) => character.gender == "male");
console.log(atLeastOneMale);
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
