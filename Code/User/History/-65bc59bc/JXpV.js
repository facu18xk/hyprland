
function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        console.log(child.nodeName);
        if (child.nodeName == tagName.toUpperCase()) matches.push(child);
    })
    return matches;
}
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span"));
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2