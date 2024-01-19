let MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];
const tableBody = document.querySelector('.tBody');

//Sort by height 

MOUNTAINS.sort((mountain1, mountain2) => {
    if (mountain1.height > mountain2.height) return -1
    else return 1
});

//Add the index
const ONE = 1;
MOUNTAINS = MOUNTAINS.map((mountain, index) => ({ index: index + ONE, name: mountain.name, height: mountain.height, place: mountain.place }));
console.log(MOUNTAINS)

const createDomStructure = () => {
    let row;
    MOUNTAINS.forEach((mountain) => {
        const row = document.createElement('tr');
        for (key in mountain) {
            const tableData = document.createElement('td');
            tableData.innerText = mountain[key];
            row.appendChild(tableData);
        }
        tableBody.appendChild(row);
    })
}

createDomStructure();