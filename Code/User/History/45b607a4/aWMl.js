const plans{
    "5k": "https://www.nike.com/pdf/Nike-Run-Club-5K-Training-Plan-Audio-Guided-Runs.pdf",
    "10k": "",
    "21k":,
    "42k"
}
const LINK = "https://en.wikipedia.org/api/rest_v1/page/summary/5K_run?redirect=false";
fetch(LINK).then((response) => {
    if (!response.ok) {
        console.error("Fetch failed");
    }
    return response.json;
}).then(response => {
    console.log(response);
});

