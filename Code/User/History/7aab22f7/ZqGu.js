const bod = document.querySelector('body');
const containers = document.querySelectorAll('key');
//Plays sound, rewind if clicked executed again 
const plays = (ev) => {
    const START = 0;
    const sound = document.querySelector(`audio[data-key="${ev.code}"]`);
    if (!sound) return;
    sound.currentTime = START
    sound.play();
}
//Adds the animation
const animation = (ev) => {
    const container = document.querySelector(`div[data-key="${ev.code}"]`);
    console.log(container);
    container.classList.add("playing");
}
containers.forEach(container => {
    container.addEventListener('transitionend', () => {
        console.log("hello");
    })

})

//Removes the class for the animation 
const removeAnimation = ev => {

}
/**
 * When a key is pressed gonna to play some sound and animate the letter pressed
 */
bod.addEventListener('keydown', ev => {
    plays(ev);
    animation(ev);
})
