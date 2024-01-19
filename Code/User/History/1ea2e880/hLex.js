// select the trail 
const trail = document.querySelector('.trail');
// Create a trail animation 
function trailAnimation(e) {
    //move in Y
    let x = e.x
    trail.style.visibility = "visible";
}
//add the listener
document.body.addEventListener('mousemove', (e) => {
    console.log(e)
    trailAnimation(e);
})