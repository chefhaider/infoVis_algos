function circularLayout(netw, width, height) {
    const { nodes, links } = netw
    // copy and sort nodes
    
    const sNodes = Array.from(nodes)
    sNodes.sort((a,b) => (a.group != b.group) ? b.group - a.group : b.c - a.c )
    //computing layout
    let sum = 0
    sNodes.forEach(n=> {sum+=n.c})
    const alpha = (2* Math.PI) /sum
    const radius = (R,gamma) => R * Math.sin(gamma/2)
    let beta = Math.PI/2
    let gamma = alpha * sNodes[0].c
    const R = Math.min(height, width) *0.4
    sNodes.forEach((n,i) =>{
        n.x = R*Math.cos(beta)
        n.y = R*Math.sin(beta)
        n.z = radius(R, gamma)

        beta += gamma/2
        gamma = alpha *sNodes[(i+1)%sNodes.length].c
        beta += gamma/2
    })
    return {
        nodes: nodes,
        edges: links
    }
}







const network = {
    nodes: [
        { id: 1, group: 1, c: 5 },
        { id: 2, group: 1, c: 3 },
        { id: 3, group: 2, c: 4 },
        { id: 4, group: 2, c: 6 },
        { id: 5, group: 3, c: 2 },
        { id: 6, group: 3, c: 8 }
    ],
    links: [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 2, target: 4 },
        { source: 3, target: 5 },
        { source: 4, target: 6 }
    ]
};


const width = 800;  // Example width
const height = 600; // Example height

const result = circularLayout(network, width, height);
console.log(result)