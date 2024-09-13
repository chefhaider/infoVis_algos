const nodes = [
    { index: 0, x: 0, y: 0, degree: 2 },
    { index: 1, x: 1, y: 0, degree: 2 },
    { index: 2, x: 0, y: 1, degree: 2 },
    { index: 3, x: 1, y: 1, degree: 3 }
];

const edges = [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 }
];

const bbox = { xmin: -1, xmax: 2, ymin: -1, ymax: 2 };

// Parameters for the simulation
const K = 1;  // Optimal distance between nodes
const Kc = 0.1; // Collision constant
const Kg = 0.1; // Gravitational constant
const beta = 0.5; // Collision force parameter
const alpha = 0.1; // Cooling factor

const disp = nodes.map(() => ({ x: 0, y: 0, d: 0 }));


function distance(source, target){

}

function CollisionForce(){
    const d = distance(nodes[e.source], nodes[e.target])
    disp[e.source].x += fa * d.x
    disp[e.source].y += fa * d.y
    disp[e.target].x -= fa * d.x
    disp[e.target].y -= fa * d.y

}

function GravitationalForce(){


}

function AttractiveForce(){

    const fa = d.d

}


function RepulsiveForce(){

    const fr = K * (nodes[i].degree + 1) * (nodes[j].degree + 1) / d.d

}

function step(K, Kc, Kg, alpha, beta, nodes, edges, disp, bbox){
    initDisplacements(disp);
    
    nodes.array.forEach((n, i) => {
        GravitationalForce(Kg, n, bbox, disp)
    });

    edges.array.forEach(e=>{
        AttractiveForce(K, nodes, e, disp)
    })

    for(let i =0; i<nodes.length; i ++){
        for(let j=i+1;nodes.length; j++){
            RepulsiveForce(k, nodes, i, j, disp)
        }
    }

    for(let i =0; i<nodes.length; i ++){
        for(let j=i+1;nodes.length; j++){
            RepulsiveForce(kc, beta, nodes, i, j, disp)
        }
    }

    
    // updating nodes poition
    nodes.forEach(function(n, i){
        const dx = disp[n.index].x
        const dy = disp[n.index].y
        const d = Math.sqrt(dx*dx + dy*dy)
        
        n.x = dx /  d * (Math.min(alpha, d) * 0.001 * Math.random() - 0.5) 
        n.y = dy / d * (Math.min(alpha, d) * 0.001 * Math.random() -0.5)
    })

    // Centre the Network
    let pos = {x:0, y:0}
    nodes.forEach(n=>{
        pos.x += n.x
        pos.y += n.y
    })
    pos.x = pos.x/nodes.length
    pos.y = pos.y/nodes.length
    pos.x = (bbox.xmax - bbox.xmin) / 2 -pos.x
    pos.y = (bbox.ymax - bbox.ymin) / 2 -pos.y
    nodes.forEach(n=>{
        n.x += pos.x
        n.y += pos.y
    })

    //check the bounding box
    nodes.forEach(n => {
        if (n.x < bbox.xmin) n.x = bbox.xmin;
        if (n.x > bbox.xmax) n.x = bbox.xmax;
        if (n.y < bbox.ymin) n.y = bbox.ymin;
        if (n.y > bbox.ymax) n.y = bbox.ymax;
    });

}