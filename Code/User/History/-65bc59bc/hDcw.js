
function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        if (child.nodeName == tagName.toUpperCase()) matches.push(child);
    })
    return matches;
}
const result = byTagName(document.body, "h2");
console.log(result);