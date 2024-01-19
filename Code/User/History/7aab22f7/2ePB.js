const bod = document.querySelector('body');
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
    const container = document.querySelector(`audio[data-key]="${ev.code}"`);

}
//adds the listener
bod.addEventListener('keydown', ev => {
    plays(ev);
})
