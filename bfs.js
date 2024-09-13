function bfs(nodes, neighbors, startIndex, V, v) {
    V.push(startIndex)
    console.log(`at node ${startIndex}`);

    for (let i = 0; i < neighbors[startIndex].length; i++) {
        let neighbor = neighbors[startIndex][i];
        if (!V.includes(neighbor)) {
            v.push(neighbor);
            }
        }
    if (v.length>0){
        console.log(v)
        x = v.shift()      
        bfs(nodes, neighbors, x, V, v)  
    }
    }




// Breadth-first search with backtracing
function bfs(nodes, neighbors, index) {
    nodes.forEach((n) => {
        n.v = false
        n.d = Number.MAX_VALUE
        n.p = -2
    })

    nodes[index].d = 0
    nodes[index].v = true
    nodes[index].p = -1

    const q = [index] // queue
    
    while (q.length > 0) {
        const s = q.shift()
        const d = nodes[s].d
        neighbors[s].forEach((e) => {
            const n = nodes[e]
            if (n.v === false) {
                console.log(n.index)
                n.v = true
                n.p = s
                n.d = d + 1
                q.push(n.index)
            }
        })
    } // step()

    console.log(nodes)
}




// Define nodes with initial properties
const nodes = [
    { index: 0 }, // Node 0
    { index: 1 }, // Node 1
    { index: 2 }, // Node 2
    { index: 3 }, // Node 3
    { index: 4 }  // Node 4
];

// Define neighbors for each node
const neighbors = [
    [1, 2], // Neighbors of node 0
    [0, 3, 4], // Neighbors of node 1
    [0, 4], // Neighbors of node 2
    [1], // Neighbors of node 3
    [1, 2]  // Neighbors of node 4
];

const V = []
const v = []


// Run BFS starting from node 0
bfs(nodes, neighbors, 0);