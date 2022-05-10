
scene("battle", ()=> {
   const fatherSpeed = 300
   const pretzelSpeed = 120
   const health = 10
   const Phealth = 5
   const BSpeed = 700
   const TIME_COUNT = 0
   const KPOS = height()/9

   layers(['background', 'obj'], 'obj')
   add([ sprite("background", {width: width(), height: height()})
   ]);


   const timer = add([
    text('0'),
    pos(50, 50),
    scale(2),
    layer('obj'),
      {
      time: TIME_COUNT,
      },
  ])
  
  timer.action (() => {
    timer.time += dt()
    timer.text = timer.time.toFixed(2)
    
    
  })

   function spawnBullet(p,s) {
    add([
        rect(24, 6),
        area(),
        pos(p,s),
        origin("center"),
        color(127, 127, 255),
        outline(4),
        move(0, -BSpeed),
        cleanup(),
        // strings here means a tag
        "bullet",
    ])
}

onKeyDown("up", () => {
    father.move(0, -fatherSpeed)
    if (father.pos.x < 0) {
        father.pos.x = width()
    }
})

onKeyDown("down", () => {
    father.move(0, fatherSpeed)
    if (father.pos.x > width()) {
        father.pos.x = 0
    }
})

onKeyPress("space", () => {
    spawnBullet(father.pos.x, father.pos.y)
    //father.pos.x, father.pos.y
})

const father = add([
   // sprite("father"),
    rect(width() /28, width() /28),
    area(),
    color("black"),
    pos(width() - 25, height() / 2),
    origin("center"),
])



const wall = add([
//sprite("wall"),
rect(50, height()),
area(),
//body(),
pos(width() / 1.2, height() / 2),
origin("center"),

])


const Lars = add([
    sprite("Lars"),
    // rect(width()/ 28, width()/28),
    // color(0, 200, 300),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 - KPOS),
    origin("center"),
])

const Tex = add([
    sprite("Tex"),
    scale(.25),
    area(),
    pos(width()/1.1,height()/2 - 2*KPOS),
    origin("center"),
])

const Shelldon = add([
    sprite("Shelldon"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 - 3*KPOS),
    origin("center"),
])

const Rainette = add([
    sprite("Rainette"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 - 4*KPOS),
    origin("center"),
])

const Raina = add([
    sprite("Raina"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 + KPOS),
    origin("center"),
])

const Ivy = add([
    sprite("Ivy"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 + 2*KPOS),
    origin("center"),
])

const Dwayne = add([
    sprite("Dwayne"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2),
    origin("center"),
])

const Shuihaizi = add([
    sprite("Shuihaizi"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 + 3*KPOS),
    origin("center"),
])

const Bartholomew = add([
    sprite("Bartholomew"),
    scale(.25),
    area(),
    pos(width()/1.1, height()/2 + 4*KPOS),
    origin("center"),
])

function spawnPretzel() {
    add([
        sprite("pretzel"),
        area(),
        pos(0, rand(0, height())),
        health(Phealth),
        "enemy",
        { speed : rand(pretzelSpeed * 0.5, pretzelSpeed * 1.5) },

    ])
}

onCollide("bullet", "enemy", (b, e) => {
    destroy(b),
    e.health = e.heatlh - 2
})




















})