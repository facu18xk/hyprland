const body = document.querySelector('body');
const MILLISECONDS = 1000;
//Create rock, paper scissors
const GAME_OPTIONS = ["rock", "paper", "scissors"];
// user input: what that input win
const RULES = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock"
}

/*
Create a function getComputerChoice which randomly returns to you a value of rock, paper of scissors 
*/
function getComputerChoice() {
    //Generate a random number from 0 to 3
    let randomNumber = Math.floor(Math.random() * GAME_OPTIONS.length);
    //if the randomNumber is 0 the choice will be rock, if the random number is 1 the choice will be paper, if the random number is 2 the choice will be scissors
    return GAME_OPTIONS[randomNumber];
}

/**
 * Run the Rock, paper, scissors algorithm.
 * @param {*} userChoice 
 * @param {*} computerChoice 
 * @returns 
 */
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "tie";
    if (RULES[userChoice] === computerChoice) return true;
    return false;
}
/**
 * Show the option selector  
 * @returns a promise when resolved give you the option chosen by the user
 */
function chooseYourWeaponDialog() {
    let option;
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    const buttons = document.createElement('div');


    container.classList.add("dialog");
    buttons.classList.add("buttons");
    title.innerText = "Choose you weapon";
    paper.innerText = "🗞 Paper";
    paper.setAttribute("value", "paper");
    scissors.innerText = "✂️ Scissors";
    scissors.setAttribute("value", "scissors");
    rock.innerText = "🪨 Rock";
    rock.setAttribute("value", "rock");

    buttons.appendChild(scissors);
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    container.appendChild(title);
    container.appendChild(buttons);
    body.appendChild(container);

    return new Promise(resolve =>
        buttons.addEventListener('click', (event) => {
            option = event.target.value;
            body.removeChild(container);
            resolve(option);
        }, { once: true })
    )
}
/*
* When the user wins 
*/
function win() {
    body.innerHTML = `<h1 class="title"> You won </h1>
    <button class="title reload" style="border: none">Play again</button>
    `
    const reload = document.querySelector('.reload');
    reload.addEventListener('click', () => {
        location.reload();
    });
}
/**
 * When it's a tie
 */
function tie() {
    body.innerHTML = `<h1 class="title">It's a tie</h1>`
    setTimeout(() => {
        body.innerHTML = `<video class="video" src="./assets/afterTie.webm"></video>`
        const tieScene = document.querySelector('video');
        tieScene.play();
        round(tieScene, 5000);
    }, 1500);
}

/**
 * This scene happen when you lose the round
 */
function losing() {
    body.innerHTML = `<video class="video" src="./assets/afterTieLose.webm"></video>`
    const outro = document.querySelector('video');
    outro.play();
    outro.addEventListener("loadedmetadata", () => {
        setTimeout(() => {
            outro.pause();
            body.innerHTML = `<h1 class="title">Game over</h1>
            <button class="title reload" style="border: none">Play again</button>`
            const reload = document.querySelector('.reload');
            reload.addEventListener('click', () => {
                location.reload();
            })
        },
            Math.floor(outro.duration * MILLISECONDS))
    })
}
/**
 * Logic for one round
 * @param {*} video background scene of the round
 * @param {*} delay delay when the pop-up options will appear 
 */
function round(video, delay) {
    video.addEventListener("loadedmetadata", () => {
        setTimeout(() => {
            video.pause();
            chooseYourWeaponDialog().then((userChoice) => {
                video.play();
                computerChoice = getComputerChoice();
                roundResult = playRound(userChoice, computerChoice);
                let timeLeft = Math.floor(video.duration - video.currentTime) * MILLISECONDS;
                setTimeout(() => {
                    video.pause();
                    if (roundResult == "tie")
                        tie();
                    else if (roundResult)
                        win();
                    //body.innerHTML = `<h1 class="title">You won</h1>`;
                    else
                        losing();
                }, timeLeft)
            })

        }, delay);
    })
}
/**
 * Play the first round
 */
function firstRound() {
    const video = document.createElement('video');
    video.setAttribute("src", "./assets/firstRound.webm");
    video.setAttribute("class", "video");
    video.style.opacity = "1";
    body.appendChild(video);
    video.play();
    round(video, 5000);
}
/**
 * Run one round of the game 
 * @returns true if the user won the round, false if the user lost the round, 0 if it's a tie 
 */
function play() {
    firstRound();
}

/**
 * ui
 * @returns 
 */
const clearHtml = () => body.innerHTML = ""
const startGame = ev => {
    if (ev.code == 'Enter') {
        clearHtml();
        play();
    }
    else
        return;
}
body.addEventListener('keydown', startGame);