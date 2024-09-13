function cc_(A, source){

    let d_ = Array(A).fill(Infinity)
    let v_ = Array(A).fill(true)
    let q_ = [source]

    while (q_.length > 0){
        v = q_.shift()
        for (let w of A[v]){
            if (!v_[w]){
                q_[w] = true
                d_[w] = A[w]
                s += d_
                q_.push(w) 
            }
        }
    }
}


function closensess(nodes, neighbors){
    let c_ = Array(nodes.length).fill(0)

    for (let n of nodes){
        c_[n.i] = 1 / cc_(neighbors, a.i)
    }
    return c_
}