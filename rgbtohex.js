function rgb2hex(rgb){
    const r = rgb[0]
    const g = rgb[1]
    const b = rgb[2]
    hex = '#hex' +
        r.toString(16).padStart(2,'0') +
        g.toString(16).padStart(2,'0') +
        b.toString(16).padStart(2,'0') 
    return hex
}


const rgb = [213,237,244]
const val = rgb2hex(rgb)
console.log("results: ",val)