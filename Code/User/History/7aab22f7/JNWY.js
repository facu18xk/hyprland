const bod = document.querySelector('body');
const containers = document.querySelectorAll('.key');
console.log(containers);
//Plays sound, rewind if clicked executed again 
const plays = (ev) => {
    const START = 0;
    const sound = document.querySelector(`audio[data-key="${ev.code}"]`);
    if (!sound) return false;
    sound.currentTime = START
    sound.play();
    return true
}
//Adds the animation
const animation = (ev) => {
    const container = document.querySelector(`div[data-key="${ev.code}"]`);
    container.classList.add("playing");
}
//Removes the animation class when the transition ends 
containers.forEach(container => {
    container.addEventListener('transitionend', () => container.classList.remove("playing"));
})

/**
 * When a key is pressed gonna to play some sound and animate the letter pressed
 */
bod.addEventListener('keydown', ev => {
    if (plays(ev))
        animation(ev);
})
