const plans = {
    "5k": "https://www.nike.com/pdf/Nike-Run-Club-5K-Training-Plan-Audio-Guided-Runs.pdf",
    "10k": "https://www.nike.com/pdf/Nike-Run-Club-10K-Training-Plan-Audio-Guided-Runs.pdf",
    "Half_marathon": "https://www.nike.com/pdf/Nike-Run-Club-Half-Marathon-Training-Plan-Audio-Guided-Runs.pdf",
    "Marathon": "https://www.nike.com/pdf/Nike-Run-Club-Marathon-Training-Plan-Audio-Guided-Runs.pdf"
}
const LINK = "https://en.wikipedia.org/api/rest_v1/page/summary/half_marathon_run?redirect=false";

fetch(LINK).then(response => response.json())
    .then(res => {
        console.log(res)
    });