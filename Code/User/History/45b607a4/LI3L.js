const LINK = "https://en.wikipedia.org/api/rest_v1/page/summary/5K_run?redirect=false";
fetch(LINK).then((response) => {
    if (!response.ok) {
        console.error("Fetch failed");
    }
    return response.json;
}).then(response => {
    console.log(response.toString);
});