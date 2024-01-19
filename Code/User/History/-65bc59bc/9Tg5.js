
function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        console.log(child);
        if (child) matches.push(child);
    })
    return matches;
}
const result = byTagName(document.body, document.createElement('h2'));
console.log(result);