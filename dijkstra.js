const PriorityQueue = require('js-priority-queue');



function dijkstra(nodes, neighbours, index, pQ) {
    if (pQ == undefined) {
        // Initialize distances and parents for all nodes
        nodes.forEach(n => {
            n.d = Infinity; // Set initial distances to infinity
            n.p = -2;       // Set parent to -2 (undefined)
        });

        // Set the starting node's distance to 0 and parent to -1
        nodes[index].d = 0;
        nodes[index].p = -1;

        // Initialize the priority queue
        pQ = new PriorityQueue({ comparator: (a, b) => a.d - b.d });
        pQ.queue(nodes[index]); // Start by queuing only the source node
    }

    while (pQ.length > 0) {
        // Dequeue the node with the smallest distance
        const x = pQ.dequeue();

        // Iterate over the neighbors of x
        neighbours[x.index].forEach(e => {
            const neighbor = nodes[e.index]; // Get the neighbor node
            const newDist = x.d + e.weight;      // Calculate the new distance to the neighbor

            // If a shorter path to the neighbor is found
            if (newDist < neighbor.d) {
                neighbor.d = newDist;   // Update the neighbor's distance
                neighbor.p = x.index;   // Set the parent of the neighbor
                pQ.queue(neighbor);     // Queue the neighbor for further exploration
            }
        });
    }
}

// Define nodes with initial properties
const nodes = [
    { index: 0 }, // Node 0
    { index: 1 }, // Node 1
    { index: 2 }, // Node 2
    { index: 3 }, // Node 3
    { index: 4 }  // Node 4
];
  
const neighbours = [
    // neighbors for node 0
    [ { index: 1, weight: 10 }, { index: 2, weight: 5 }, { index: 3, weight: 3 } ],
    // neighbors for node 1
    [ { index: 0, weight: 10 }, { index: 3, weight: 1 } ],
    // neighbors for node 2
    [ { index: 0, weight: 5 }, { index: 4, weight: 2 } ],
    // neighbors for node 3
    [ { index: 0, weight: 3 }, { index: 1, weight: 1 }, { index: 2, weight: 9 }, { index: 4, weight: 4 } ],
    // neighbors for node 4
    [ { index: 2, weight: 2 }, { index: 3, weight: 4 } ],
];
  

dijkstra(nodes, neighbours, 0)
console.log(nodes) 