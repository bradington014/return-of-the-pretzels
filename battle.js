
scene("battle", ()=> {
   const fatherSpeed = 100
   const pretzelSpeed = 200
   const health = 10
   const Phealth = 5
   const BSpeed = 700


   layers(['background', 'obj'], 'obj')
   add([ sprite("background", {width: width(), height: height()})
   ]);


   function spawnBullet(p) {
    add([
        rect(12, 48),
        area(),
        pos(p),
        origin("center"),
        color(127, 127, 255),
        outline(4),
        move(0, BSpeed),
        cleanup(),
        // strings here means a tag
        "bullet",
    ])
}

onKeyPress("space", () => {
    spawnBullet(width() /2, height() /2)
})

// const father = add([
//     sprite("father"),
//     area(),
//     pos(width() / 2, height() - 64),
//     origin("center"),
// ])

// const wall = add([
// sprite("wall"),
// area(),
// body(),
// pos(width() / 2, height()),
// origin("center"),

// ])


// const Lars = add([
//     sprite("Lars"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Tex = add([
//     sprite("Tex"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Shelldon = add([
//     sprite("Shelldon"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Rainette = add([
//     sprite("Rainette"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Raina = add([
//     sprite("Raina"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Ivy = add([
//     sprite("Ivy"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Dwayne = add([
//     sprite("Dwayne"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Shuihaizi = add([
//     sprite("Shuihaizi"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])

// const Bartholomew = add([
//     sprite("Bartholomew"),
//     area(),
//     pos(0,0),
//     origin("center"),
// ])




add([
    text('starting game'),
    pos(120, 80),
    scale(5),
    
])



















})