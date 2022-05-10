import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs"

// initialize kaboom context
export const k = kaboom({
    width: 1400,
    height: 800,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    background: [('sapbackground.png')],
    global: true,
});

