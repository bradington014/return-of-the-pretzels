import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs"

// initialize kaboom context
export const k = kaboom({
    width: 2000,
    height: 1641,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    background: [ 255, 255, 255, ],
    global: true,
});