function wordcloud(words, width, height, flag) {
    let orientation =  {  next: () => { return 0 } }
    if (flag) orientation = orientationGenerator()
    const obbs = []
    
    const res = []
    for(let w of words) {
        const path = pathGenerator(width, height)
        const angle = orientation.next()
        let insertion_failed = true
        let xCoord = 0
        let yCoord = 0
        let obb = undefined
        while (!path.end()) {
            const {x, y} = path.next() // randomizePosition( w )
            xCoord = x
            yCoord = y
            obb = getObb( w, x, y, angle )
            if (!bbox(width, height, obb)) continue
            if( !intersectsOBB( obb , obbs) ) { // there is no overlap
                obbs.push( obb )
                insertion_failed = false
                break
            }
        }
        if (!bbox(width, height, obb)) {
            insertion_failed = true
        }
        res.push({word: w, obb: obb, insertion_failed: insertion_failed})
    }
    return res
}


