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
console.log(totalVotes(voters)); // 7