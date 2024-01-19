let userAge = 18
let sex = "male";
let gender = (sex === "male") ? "man" : "woman";
function renderUnderAgeSite() {
    console.log("You're a kid");
}
function renderAdultSite() {
    console.log(`You are a ${gender}`);
}
(userAge >= 18) ? renderAdultSite : renderUnderAgeSite;