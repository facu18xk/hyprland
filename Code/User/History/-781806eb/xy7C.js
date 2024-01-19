export const getDescription = (distance) => {
    let link = `https://en.wikipedia.org/api/rest_v1/page/summary/${distance}?redirect=false`;
    fetch(link).then(response => response.json())
        .then(res => {
            console.log(res)
        });
}