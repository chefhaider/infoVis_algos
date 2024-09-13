function eigenvector_closeness(A, maxIter, eps){

    let b_ = Array(A.length).fill(1)    // array representing the centrality values
    let c_ = Array(A.length).fill(0)    // temporarily store updated centrality values during each iterations
    let e_ = 0          //prev centrality
    let r_ = Infinity   // current centralits


    while (Math.abs(e_ - r_) > eps && maxIter-- > 0){
        e_ =r_
        r_ = 0

        // updating centrality for each node
        for (let i = 0; i<A.length; i ++){
            for(let j of A[i]){
                c_[i] += b_[i]
            }
            r_ += c[i]*c_[i]
        }

        // Normalising
        r_ = Math.sqrt(r_)
        for (let i = 0; i<A.length;i++){
            b_[i] = c_[i]/r_
        }
    }

    // Final Normalisation
    let m_ = Math.max(...b_)
    for(let i = 0; i<b_length;i ++){
        b_[i] /=   m_
    }

    return b_
}