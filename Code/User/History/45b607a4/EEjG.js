const plans = {
    "5k_run": "https://www.nike.com/pdf/Nike-Run-Club-5K-Training-Plan-Audio-Guided-Runs.pdf",
    "10k_run": "https://www.nike.com/pdf/Nike-Run-Club-10K-Training-Plan-Audio-Guided-Runs.pdf",
    "Half_marathon": "https://www.nike.com/pdf/Nike-Run-Club-Half-Marathon-Training-Plan-Audio-Guided-Runs.pdf",
    "Marathon": "https://www.nike.com/pdf/Nike-Run-Club-Marathon-Training-Plan-Audio-Guided-Runs.pdf"
}
let link;
LINK = `https://en.wikipedia.org/api/rest_v1/page/summary/${plans[0]}?redirect=false`;

fetch(LINK).then(response => response.json())
    .then(res => {
        console.log(res)
    });