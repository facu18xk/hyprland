const REQUEST = new Request("https://en.wikipedia.org/api/rest_v1/page/summary/5K_run?redirect=false");

fetch(REQUEST).then((response) => {
    if (!response.ok) {
        console.error("Fetch failed");
    }
    return response.blob;
}).then(response => {
    console.log(response.toString);
});