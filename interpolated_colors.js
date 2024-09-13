// interpolate a rgb-color
function iterpolatedcolor(colors, u, umin, umax) {
    if (u >= umax) return colors[colors.length - 1]
    if (u <= umin) return colors[0]
    const alpha = (u - umin) / (umax - umin)
    const nrColors = colors.length
    const x = (nrColors - 1) * alpha
    const i0 = Math.floor(x) // i0 >= due to line 9
    const i1 = i0 + 1 // i1 < nrColors due to line 8
    const dt = x - i0
    const r = (1 - dt) * colors[i0].r + dt * colors[i1].r
    const g = (1 - dt) * colors[i0].g + dt * colors[i1].g
    const b = (1 - dt) * colors[i0].b + dt * colors[i1].b
    return {r, g, b}
}

const colors = [
    { r: 255, g: 0, b: 0 },    // Red
    { r: 0, g: 255, b: 0 },    // Green
    { r: 0, g: 0, b: 255 }     // Blue
];

const color = iterpolatedcolor(colors, 0.5, 0, 1);
console.log(color); // { r: 0, g: 128, b: 128 }
