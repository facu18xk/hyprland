// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    //move in Y
    const FRAMES = 60;
    let x = e.x;
    let y = e.y;
    trail.style.top = `${y}px`
    trail.style.left = `${x}px`
    trail.style.visibility = "visible";
}

//add the listener
document.body.addEventListener('mousemove', (e) => {
    trailAnimation(e);
})