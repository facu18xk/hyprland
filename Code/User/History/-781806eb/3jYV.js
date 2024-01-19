let currentDistance = "10k_run";
let link;
link = `https://en.wikipedia.org/api/rest_v1/page/summary/${currentDistance}?redirect=false`;

fetch(link).then(response => response.json())
    .then(res => {
        console.log(res)
    });
const getDescription = () => {

}