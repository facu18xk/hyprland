const balloon = document.querySelector('.balloon');
const GROWING_FACTOR = .2;
let scale = 1;
let balloonWidth = balloon.offsetWidth;
/**
 * Inflate the balloon
 * @param {*} scale 
 */
const inflateBalloon = () => {
    scale += .2;
    balloon.style.transform = `scale(${scale})`
    balloonWidth += balloonWidth * scale;
};
/**
 * Deflate the balloon 
 */
const deflateBalloon = () => {
    scale -= .2;
    balloon.style.transform = `scale(${scale})`;
    balloonWidth -= balloonWidth * scale;
}
/**
 *  Check if the balloon can grow more 
 * @returns true if the balloon can grow more, false otherwise
 */
const checkBalloonSize = () => {
    let ballonWidthInflated = balloonWidth + balloonWidth * GROWING_FACTOR;
    if (ballonWidthInflated >= window.offsetWidth) {
        console.log(ballonWidthInflated, window.innerWidth);
        return false;
    }
    return true;
}
/**
 * Return true if the ballon will blow if the ballon continues shrinking 
 * @returns 
 */
const willBlow = () => {
    let ballonDeflated = balloonWidth - balloonWidth * GROWING_FACTOR;
    if (ballonDeflated < 10) return true
    return false
}
const blow = () => {
    balloon.innerText = "💥";
    const FRAMES = 10
    for (let i = 0; i < FRAMES; i++)
        inflateBalloon();
}
//Remove the default function of the arrows keys 
document.body.addEventListener('keydown', (e) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
})
document.body.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        if (checkBalloonSize())
            inflateBalloon();
        else
            blow();
    }
    if (e.key == "ArrowDown") {
        if (!willBlow())
            deflateBalloon(0);
        else
            blow();
    }
})