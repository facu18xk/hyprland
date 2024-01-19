// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    let x = e.x;
    let y = e.y;
    trail.style.top = `${y}px`
    trail.style.left = `${x}px`
    trail.style.visibility = "visible";
}

//add the listener
document.body.addEventListener('mousemove', (e) => {
    if (e.clientX <= 0 || e.clientY <= 0)
        trail.style.visibility = "hidden";
    else
        trailAnimation(e);
})