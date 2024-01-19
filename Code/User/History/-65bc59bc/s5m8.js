
console.dir(document.body.childNodes)
function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        if (child == tagName) matches.push(child);
    })
}
byTagName(document.body, "h2");