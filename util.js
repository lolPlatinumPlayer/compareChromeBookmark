function getFirstTagChildFromDom(tagName,dom){
    for (let i=0;i<dom.children.length;i++){
        const child=dom.children[i]
        if(child.tagName===tagName.toUpperCase()){
            return child
        }
    }
    console.error(`子元素里没有`,tagName,`标签`)
}

export {getFirstTagChildFromDom}