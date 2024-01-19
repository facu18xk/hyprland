class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let products = [
    new Product("Cebolla", 120), new Product("Banana", 200), new Product("Whey brotein", 1000)
]
// let total = 0;
// products.forEach(el => {
//     total += el.price;
// })

let totalPrice = products.reduce((total, item) => {
    return total + item.price;
}, 0)


const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
    { name: 'Emma', age: 35 },
    { name: 'Frank', age: 40 },
    { name: 'Grace', age: 26 },
    { name: 'Henry', age: 32 },
    { name: 'Ivy', age: 23 },
    { name: 'Jack', age: 27 },
    { name: 'Katherine', age: 31 },
    { name: 'Liam', age: 29 },
    { name: 'Mia', age: 24 },
    { name: 'Noah', age: 38 },
    { name: 'Olivia', age: 33 },
    { name: 'Peter', age: 45 },
    { name: 'Quinn', age: 34 },
    { name: 'Rachel', age: 36 },
    { name: 'Samuel', age: 41 },
    { name: 'Tara', age: 41 },
];
const groupedPpl = peopleArray.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {})
function total(arr) {
    const totalSum = arr.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0);
    return totalSum;
}

function stringConcat(array) {
    const string = array.reduce((string, number) => {
        return string + number;
    }, "");
    return string
}


function totalVotes(array) {
    const votes = array.reduce((total, voter) => {
        if (voter.voted) return total + 1;
        else return total;
    }, 0);
    return votes;
}

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function shoppingSpree(arr) {
    totalPrice = arr.reduce((total, product) => {
        return total + product.price;
    }, 0);
    return totalPrice;
}

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];



function flatten(arr) {
    const result = arr.reduce((array, element) => {
        return array.concat(element);
    }, []);
    return result;
}

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Object with the age ranges 
const ageRange = {
    young: [18, 25],
    mid: [26, 35],
    old: [36, 55]
}

// check the age range of the voter 
function checkAgeRange(age) {
    const MIN_AGE = 0;
    const MAX_AGE = 1;
    let voterRange;
    for (const range in ageRange) {
        let MinAge = ageRange[range][MIN_AGE];
        let MaxAge = ageRange[range][MAX_AGE];
        if (age >= MinAge && age <= MaxAge) {
            voterRange = range;
        }
    }
    return voterRange;
}
// reduce the array

/**
 * Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
 */
function voterResults(arr) {
    const resultTemplate = {
        young: { votes: 0, people: 0 },
        mid: { votes: 0, people: 0 },
        old: { votes: 0, people: 0 }
    }
    const result = arr.reduce((groupedVoters, voter) => {
        let voterAgeRange = checkAgeRange(voter.age);
        if (voter.voted) groupedVoters[voterAgeRange].votes++;
        groupedVoters[voterAgeRange].people++;
        return groupedVoters;
    }, resultTemplate)
    return result
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/