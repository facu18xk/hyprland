const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
const changeColorButton = document.querySelector('.changeColor');
const changeGridButton = document.querySelector('.changeGrid');
let color = "#FFFFFF";
let grid = 16;
const SQUARE_POWER = 2;
/**
 * Creates a function that calculates the width and the height depending on the container width/height 
 * create a function that creates divs with its styles 
 */
/**
 *  Return the pixel dimensions for each div 
 */
function calculatePixelSize(numberPixels) {
    const numberPixelsPerSide = Math.sqrt(numberPixels);
    const containerWidth = container.offsetWidth;
    return containerWidth / numberPixelsPerSide;
}
/**
 * Hex color 2 rgba
 */
const addTransparency = (ev) => {
    let colorHere = color
    const CURRENT_ELEMENT = 1;
    const transparencyHexCode = [
        '10',
        '20',
        '30',
        '40',
        '50',
        '60',
        '70',
        '80',
        '90',
        'FF'
    ];
    if (colorHere.length == 7 || colorHere.length == 4) {
        colorHere += transparencyHexCode[0];
    }
    if (colorHere.length == 9 || colorHere.length === 6) {
        let transparencyCode = color.slice(-2);
        let nextTransparencyIndex = transparencyCode.indexOf(transparencyCode) + CURRENT_ELEMENT;
        colorHere = colorHere.replace(transparencyCode, transparencyHexCode[nextTransparencyIndex]);
    }
    console.log(colorHere);
    return colorHere;
}

/**
 * Change the color of the color of the div
 */
const changeColor = ev => {
    ev.target.style.backgroundColor =
        addTransparency(ev);
}

/**
 * Function that create the desire number of pixels for the canvas and added to it
 */

function createPixels(numberPixels) {
    container.innerHTML = "";
    const side = calculatePixelSize(numberPixels);
    for (let i = 0; i < numberPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add("pixel");
        pixel.style.height = `${side}px`;
        pixel.style.width = `${side}px`;
        container.appendChild(pixel);
    }
    container.addEventListener('mouseover', changeColor)
}
/**
 * Function that creates a popup
 */
function popUp() {
    const popup = document.createElement('div');
    popup.classList.add("popup");
    document.body.appendChild(popup);
    return popup;
}
/**
 * Creates a popup for changing the grid 
 */
function changeGrid() {
    const popup = popUp();
    popup.innerHTML = `
        <h2 class="popup--title">Select the gird size</h2> 
        <input id="grid" type="range" min="2" value="16" step="2" max="100" class="popup--input"> 
        <label for="grid" class ="value">Value: 16</label> 
        <button class="popup--button">Ok</button>
    `;
    const input = document.querySelector('.popup--input');
    const button = document.querySelector('.popup--button');
    input.addEventListener('input', (ev) => {
        const valueIndicator = document.querySelector('.value')
        valueIndicator.innerText = `Value: ${ev.target.value}`;
    });
    button.addEventListener('click', () => {
        grid = parseInt(input.value);
        document.body.removeChild(popup);
        createPixels(Math.pow(grid, 2));
    });
}
/**
 * Create a popup for showing a input to change the color of the pixel 
 */
function changeColorPixel() {
    const popup = popUp();
    popup.innerHTML = `
    <h2 class="popup--title">Pick a color</h2>
    <input id="color" type="color" class="popup--input" >
    <label for="color">Color: #fff </label>
    <button class="popup--button">Ok</button>    
    `;
    const inputColor = document.querySelector(".popup--input");
    const button = document.querySelector(".popup--button");
    inputColor.addEventListener('input', (ev) => {
        const colorIndicator = document.querySelector('label[for="color"]');
        colorIndicator.innerText = `Color: ${ev.target.value}`
    })
    button.addEventListener('click', () => {
        if (inputColor.value.trim() == "")
            return;
        else {
            color = inputColor.value;
            document.body.removeChild(popup);
        }
    });
}
//Listeners for the buttons 
changeColorButton.addEventListener('click', changeColorPixel);
changeGridButton.addEventListener('click', changeGrid);
//Default Parameters 
createPixels(Math.pow(grid, SQUARE_POWER));