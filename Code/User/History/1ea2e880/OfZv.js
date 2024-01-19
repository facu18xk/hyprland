// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    //move in Y
    const FRAMES = 60;
    for (let i = 0; i < FRAMES; i++) {
        setTimeout(() => {
            let x = e.x;
            let y = e.y;
            trail.style.opacity = `${0.66}`
            trail.style.top = `${y}px`
            trail.style.left = `${x}px`
            trail.style.visibility = "visible";
        }
            , 50)
    }
}

//add the listener
document.body.addEventListener('mousemove', (e) => {
    trailAnimation(e);
})