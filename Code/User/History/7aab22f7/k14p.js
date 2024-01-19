const bod = document.querySelector('body');
const sounds = document.querySelectorAll('audio');
console.log(sounds);
//Plays sound, rewind if clicked executed again 
const plays = (ev) => {
    const sound = document.querySelector(`audio[data-key="${ev.code}"]`);
    console.log(sound);
}
//Adds the animation

//adds the listener
bod.addEventListener('keydown', ev => {
    plays(ev);
    console.log(ev.code);
})
