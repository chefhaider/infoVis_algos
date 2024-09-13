function baselineSimple(bnames) {
    return new Array(bnames[0][1].length).fill(0)
}
function baselineSymmetric(bnames) {
    const g0 = new Array(bnames[0][1].length).fill(0)
    for (let n of bnames) {
        for (let [i, t] of n[1].entries()) {
            g0[i] += t.number
        }
    }
    for (let i = 0; i < g0.length; i++) {
        g0[i] /= -2
    }
    return g0
}
function baselineWiggle(bnames) {
    const n = bnames.length // number of layers
    const g0 = new Array(bnames[0][1].length).fill(0)
    for (let [j, l] of bnames.entries()) {
        for (let [i, t] of l[1].entries()) {
            g0[i] += (n-j) * t.number
        }
    }
    for (let i = 0; i < g0.length; i++) {
        g0[i] /= -(n+1)
    }
    return g0
}