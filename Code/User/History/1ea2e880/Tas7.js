// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    //move in Y
    let x = e.x;
    let y = e.y;
    let offsetX = e.offsetX;
    let offsetY = e.offsetY;
    trail.style.top = `${y + offsetY}px`
    trail.style.left = `${x + offsetX}px`
    trail.style.visibility = "visible";
}
//add the listener
document.body.addEventListener('mousemove', (e) => {
    console.log(e)
    trailAnimation(e);
})