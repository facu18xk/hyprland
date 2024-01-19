const divs = document.querySelectorAll('div');

divs.forEach(el => {
    el.addEventListener('click', (ev) => {
        console.log(ev.currentTarget.classList.value);
        ev.stopPropagation();
    }, { capture: true })
});