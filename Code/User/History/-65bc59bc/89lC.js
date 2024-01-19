function byTagName(node, tagName) {
    const childNodes = node.childNodes;
    const matches = [];
    childNodes.forEach(child => {
        if (child.nodeName == tagName.toUpperCase())
            matches.push(child);
        if (child.childNodes.length != 0)
            child.childNodes.forEach(grandchild => {
                if (grandchild.nodeName == tagName.toUpperCase())
                    matches.push(grandchild);
            })
    })
    return matches;
}
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2