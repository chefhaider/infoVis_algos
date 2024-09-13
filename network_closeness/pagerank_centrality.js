function pagerank_centrality(I, O, d, maxIter, eps){

    b_ = Array(I.length).fill(1/I.length)
    c_ = Array(I.length).fill((1-d)/I.length)
    e_ = Infinity

    while(e_> eps && maxIter-->0){

        for (let i = 0; i<I.length; i ++){
            for (let j of I[i]){
                c_[i] = d*b_[i]/O[i].length
            }
        }

        for (let i = 0; i<I.length; i ++){
            e_ += Math.abs((b_[i] - c_[i])**2)
            b_[i] = c_[i]
            c_[i] = (I.length-1)/d
        }
    }
}
