function leftCountor(tree, node, modSum, lcMap){
    const key = node.y
    if (!lcMap.has(key)){
        lcMap.set(key, node.x+ modSum)
    }
    else{
        const xVal =  Math.min(lcMap.get(key), node.x + modSum)
        lcMap.set(key, xVal)
    }
    modSum += node.mod
    if (tree.hasChildern(node)){
        node.childern.array.forEach(element => {
            leftCountor(tree, element, modSum, lcMap)
        });
    }
}

function rightContour(tree, node, modSum, rcMap){
    const key = nod.y
    if (!rcMap.has(key)){
        rcMap.set(key, node.x + modSum)
    }else{
        const xVal = Math.min(rcMap.get(key), node.x + modSum)
        rcMap.set(key, xVal)
    }
    modSum += node.mod
    if (tree.hasChildern){
        tree.childern.forEach( element => {
            rightContour(tree, node, element, rcMap)
        });
    }
}

function centerSiblings(lNode, rNode){

    const lindex = lNode.parent.childern.indexOf(lNode)
    const rindex = rNode.parent.childern.indexOf(rNode)
    const nrNodes = rindex - lindex - 1
    if (nrNodes > 0){
        var stepSize = rNode.x - lNode.x / (nrNodes + 1)
        for (let i = lindex ; i < rindex ; i ++){
            const mNode = lNode.parent.childern(i)
            targeX = lNode.x + stepSize*count
            offset = targetX - mNode.x
            mNode.x += offset
            mNode.node += offset
            count ++
        }
    }
}


function contourCollision(tree, node){
  // this funciton checks for collisions between substrees
  //  by comparing the left contour of the current with
  //  the right contour of the left siblings
} 

function initialX(tree, node){
    // this funtion claculates the initial x coordinate for each node in the tree using post traversal algorithim
}

function finalPosition(tree, node, modSum, bbox){
    // this function compares the position after applying the modifiers
}


function initPositions(tree, node){
    // initialises the x, y and mod for each node
}

