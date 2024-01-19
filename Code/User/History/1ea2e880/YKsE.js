// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    //move in Y
    const FRAMES = 60;
    for (let i = 0; i < FRAMES; i++) {
        let x = e.x - i;
        let y = e.y - i;
        trail.style.opacity = `${0.66 * i}`
        trail.style.top = `${y}px`
        trail.style.left = `${x}px`
        trail.style.visibility = "visible";
    }
}

//add the listener
document.body.addEventListener('mousemove', (e) => {
    trailAnimation(e);
})