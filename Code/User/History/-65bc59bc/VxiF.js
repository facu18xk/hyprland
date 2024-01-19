
function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        if (child == tagName) matches.push(child);
    })
    return matches;
}
byTagName(document.body, "h2");