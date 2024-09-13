function conservativeForces(K, Kc, Kg, beta, nodes, bbox, disp){
    initDisplacements(disp)

    //gravitational force
    nodes.array.forEach(e => {
        gravitationalForces(Kg, nodes, e, bbox, disp)
    });

    //gravitational force
    nodes.array.forEach(e => {
        gravitationalForces(K, ndoes, e, disp)
    });

    //colision force
    for (let i =0; i<nodes.length ; i++){
        for (let j =i+1; i<nodes.length ; j++){
            attractiveForces(Kc, nodes, i, j, bbox, disp)
        }   
    }

    //repulsive force
    for (let i =0; i<nodes.length ; i++){
        for (let j =i+1; i<nodes.length ; j++){
            attractiveForces(K, nodes, i, j, beta, disp)
        }   
    }

}

function positionVerlet(K, Kc, Kg, beta, nodes, edges, disp, bbox){
    conservativeForces(K, Kg, Kc, beta, nodes, bbox, disp)

    //updating poistion and velocity
    w = 0.3
    h = 0.008
    for( let n of nodes){
        const xprev = n.xprev
        n.xprev = n
        n.prevy = n

        fx = disp[n.index] - w*n.x - 0.001*jiggle
        dx = (n.x- x.prev)+(fx*h*h)
        n.x = n.x + dx
        n.vx = (n.x - n.xprev) / h

        fy = disp[n.index].y - w*n.y - 0.001*jiggle()
        dy = (n.y - n.yprev) + fy*h*h
        n.y = n.y + dy
        n.vy = (n.y - n.yprev) / h
    }

    fixPosition(nodes, bbox)
}



function velocityVerlet(K, Kc, Kg, beta, nodes, edges, bbox, disp) { 
    // compute conservative forces
    conservativeForces(K, Kc, Kg, beta, nodes, edges, bbox, disp)
    // update position, velocity and acceleration
    const w = 3
    const h = 0.005
    for (let n of nodes) {
        // keep position for position-Verlet
        n.xprev = n.x 
        n.yprev = n.y
        // update position
        const dx = n.vx * h + 1/2 * (n.fx - w * n.vx) * h**2 + 0.001 * jiggle() // add some noise
        const dy = n.vy * h + 1/2 * (n.fy - w * n.vy) * h**2 + 0.001 * jiggle() // add some noise
        n.x = n.x + dx
        n.y = n.y + dy 
        // conservative force
        const fx = disp[n.index].x
        const fy = disp[n.index].y
        // update velocity
        const vx = (n.vx * (1 - w*h/2) + 1/2 * (fx + n.fx) * h) / (1 + w*h/2)
        const vy = (n.vy * (1 - w*h/2) + 1/2 * (fy + n.fy) * h) / (1 + w*h/2)
        // keep data for next time step
        n.vx = vx
        n.vy = vy
        n.fx = fx
        n.fy = fy
    }
    // 
    fixPositions(nodes, bbox)
}