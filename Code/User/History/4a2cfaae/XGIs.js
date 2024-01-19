const balloon = document.querySelector('.balloon');
const GROWING_FACTOR = .2;
let balloonWidth;
/**
 * Inflate the balloon
 * @param {*} scale 
 */
const inflateBalloon = (scale) => {
    balloon.style.transform = `scale(${scale})`
    balloonWidth = balloon.offsetWidth;
    balloonWidth += GROWING_FACTOR;
};
/**
 *  Check if the balloon can grow more 
 * @returns true if the balloon can grow more, false otherwise
 */
const checkBalloonSize = () => {
    let ballonWidthInflated = balloonWidth + balloonWidth * GROWING_FACTOR;
    if (ballonWidthInflated >= window.offsetWidth) {
        return false;
    }
    return true;
}
//Remove the default function of the arrows keys 
document.body.addEventListener('keydown', (e) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
})
document.body.addEventListener('keydown', (e) => {
    console.log(e);
})