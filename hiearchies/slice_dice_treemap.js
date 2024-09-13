function slideanddice(sibling, rect, depth){
    let d = 0
    sibling.forEach(s => {
        if (depth %2 === 0){
            const w = s.size / rect.height
            s.x = rect.x + d
            s.y = rect.y
    
            s.width = w
            s.height = rect.height
    
            d += w
        }
        else {
            const h = s.size / rect.width
            s.x = rect.x
            s.y = rect.y + d
    
            s.height = h
            s.width = rect.width
    
            d += h
        }
        
    });
}


function treemap(tree, node, depth){

    if (tree.hasChildern(node)){
        const width = node.width
        const height = node.height
        const x0 = node.x
        const y0 = node.y

        const rect = {
            width:width,
            height:height,
            x:x0,
            y:y0
        }

        const sibling = node.childern
        
        normalizeArea(sibling, rect)

        slideanddice(sibling, rect, depth)

        sibling.forEach(s => {treemap(tree, s, depth + 1)})
    }
}