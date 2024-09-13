
// Converts a hex triplet color string to an object 
// with the rgb values of a color in the interval [0,255]
function hex2rgb(hexString) {
    const rs = hexString.substring(1, 3)
    const gs = hexString.substring(3, 5)
    const bs = hexString.substring(5, 7)
    return { r: Number('0x' + rs), g: Number('0x' + gs), b: Number('0x' + bs) }
}