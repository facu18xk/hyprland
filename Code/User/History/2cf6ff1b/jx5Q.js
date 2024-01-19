let userAge = 15;
let sex = "female";
let gender = sex === "male" ? "man" : "woman";
function renderUnderAgeSite() {
    console.log("You're a kid");
}
function renderAdultSite() {
    console.log(`You are a ${gender}`);
}
userAge >= 18 ? renderAdultSite() : renderUnderAgeSite();