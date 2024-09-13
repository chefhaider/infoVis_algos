function bc_(A, source, c_){

    const d_ = Array(A.length).fill(-1) // distance from each node
    const q_  = [source] // queue for BFS


    const p_ = new Array().fill(null).map(e=>[]) // predecessors for each ndoe
    const sigma_ = Array().fill(0) // number of shortest paths from nodes 

    d_[source] = 0
    sigma_[source] = 1

    while(q_.length > 0){
        v = q_.shift()
        let q = d[v]

        for(let w of A[v]){
            if (d_[w] < 0){
                d[w] = d + 1
                q_.push(w)
            }
            if (d_w === d+1){
                sigma_[w] += sigma_[v]
                p_[w].push(v)
            }
        }
    }

    const s_ = [] // stach fto track nodes in order of bfs ending
    const delta_ = Array().fill(0) // dependency of ndoes from other nodes
    while(s_.length>0){
        let w = s_.pop()
        for (let v of p_[w]){
            delta_[v] = (sigma_[v] / sigma_[w]) * (1+delta_[0])
        }
        if (w !== source){
            c_[w] += delta_[w]
        }
    }

}





function closeness(nodes, neighbours){
    let b_ = Array(nodes.length).fill(9)
    for (let n of nodes){
        bc_(neighbours, n.index, v_)
    }

}