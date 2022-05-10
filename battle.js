
scene("battle", ()=> {
   const fatherSpeed = 100
   const pretzelSpeed = 200
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
    //sprite("Lars"),
    rect(width()/ 28, width()/28),
    color(0, 200, 300),
    area(),
    pos(width()/1.1, height()/2 - KPOS),
    origin("center"),
])

const Tex = add([
   // sprite("Tex"),
     rect(width()/ 28, width()/28),
    color(300, 0, 0),
    area(),
    pos(width()/1.1,height()/2 - 2*KPOS),
    origin("center"),
])

const Shelldon = add([
   // sprite("Shelldon"),
    rect(width()/ 28, width()/28),
    color(200, 200, 300),
    area(),
    pos(width()/1.1, height()/2 - 3*KPOS),
    origin("center"),
])

const Rainette = add([
   // sprite("Rainette"),
    rect(width()/ 28, width()/28),
    color(300, 100, 300),
    area(),
    pos(width()/1.1, height()/2 - 4*KPOS),
    origin("center"),
])

const Raina = add([
   // sprite("Raina"),
    rect(width()/ 28, width()/28),
    color(300, 300, 100),
    area(),
    pos(width()/1.1, height()/2 + KPOS),
    origin("center"),
])

const Ivy = add([
  //  sprite("Ivy"),
    rect(width()/ 28, width()/28),
    color(300, 100, 300),
    area(),
    pos(width()/1.1, height()/2 + 2*KPOS),
    origin("center"),
])

const Dwayne = add([
    //sprite("Dwayne"),
    rect(width()/ 28, width()/28),
    color(200, 200, 300),
    area(),
    pos(width()/1.1, height()/2),
    origin("center"),
])

const Shuihaizi = add([
   // sprite("Shuihaizi"),
    rect(width()/ 28, width()/28),
    color(300, 100, 100),
    area(),
    pos(width()/1.1, height()/2 + 3*KPOS),
    origin("center"),
])

const Bartholomew = add([
    //sprite("Bartholomew"),
    rect(width()/ 28, width()/28),
    color(100, 100, 100),
    area(),
    pos(width()/1.1, height()/2 + 4*KPOS),
    origin("center"),
])




add([
    text('starting game'),
    pos(120, 80),
    scale(5),
    
])



















})