const divs = document.querySelectorAll('div');

divs.forEach(el => {
    el.addEventListener((ev) => {
        console.log(ev.target);
    })
});