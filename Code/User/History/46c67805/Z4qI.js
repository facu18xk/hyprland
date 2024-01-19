const container = document.getElementById('container');

const redParagraph = document.createElement('p');
redParagraph.innerText = "Hey, I'm red";
redParagraph.style.color = 'red';


const blueH3 = document.createElement('h3');
blueH3.innerText = "I'm a blue h3!";
blueH3.style.color = 'blue';

const box = document.createElement('div');
box.style.border = '1px solid black';
box.style.backgroundColor = 'pink';

const boxTitle = document.createElement('h1');
boxTitle.innerText = "I'm in a div";

const boxParagraph = document.createElement('p');
boxParagraph.innerText = "Me too";

box.appendChild(boxTitle);
box.appendChild(boxParagraph);

container.appendChild(redParagraph);
container.appendChild(blueH3);
container.appendChild(box);

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    console.log(e);
})