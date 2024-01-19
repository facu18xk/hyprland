// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    let x = e.x;
    let y = e.y;
    trail.style.top = `${y}px`
    trail.style.left = `${x}px`
    trail.style.visibility = "visible";
    setTimeout(() => {
        trail.style.visibility = "hidden";
    }, 500)
}

//add the listener
document.body.addEventListener('mousemove', (e) => {
    trailAnimation(e);
})