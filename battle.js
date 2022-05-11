const fatherSpeed = height() * 7
    const pretzelSpeed = 120
    const health = 10
    const Phealth = 5
    const BSpeed = 700
    const TIME_COUNT = 0
    const KPOS = height() / 9
    const NPOS = height()/23
    const KSCALE = height() / 2500
    var FMove = 5
    var BDMG = 1
    var wave = 0
    var TexScript = "false"

scene("battle", () => {
    

    layers(['background', 'obj'], 'obj')
    add([sprite("background", { width: width(), height: height() })
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

    timer.action(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)


    })

    function spawnBullet(p, s) {
        add([
            rect(24, 6),
            area(),
            pos(p, s),
            origin("center"),
            color(127, 127, 255),
            outline(4),
            move(0, -BSpeed),
            cleanup(),
            // strings here means a tag
            "bullet",
        ])
    }

    onKeyPress("up", () => {

        if (father.pos.y > 0 && FMove < 9) {
            father.move(0, -fatherSpeed)
            FMove += 1
        }
    })

    onKeyPress("down", () => {

        if (father.pos.y < height() && FMove > 1) {
            father.move(0, fatherSpeed)
            FMove -= 1
        }
    })

    onKeyPress("space", () => {
        spawnBullet(father.pos.x, father.pos.y)
        //father.pos.x, father.pos.y
    })

    const father = add([
        // sprite("father"),
        rect(width() / 28, width() / 28),
        area(),
        color("black"),
        pos(width()/1.15, height() / 2),
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


   
    

 
addChild("Lars", width()/1.035, height() / 2 - KPOS, ()=> {sac(width()/1.035, height() / 2 - KPOS, "Lars", () => {death("Lars")}, () => {cancel()})},"Freezes Map")  

 addChild("Tex", width() / 1.035, height() / 2 - 2 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 2 * KPOS, "Tex",() => {death("Tex")}, () => {cancel()})}, "Sets enemies aflame")

 addChild("Shelldon", width() / 1.035, height() / 2 - 3 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 3 * KPOS, "Shelldon",() => {death("Shelldon")}, () => {cancel()})}, "Slows time")

 addChild("Rainette", width() / 1.035, height() / 2 - 4 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 4 * KPOS, "Rainette",() => {death("Rainette")}, () => {cancel()})}, "Showers enemies with arrows")

 addChild("Raina", width() / 1.035, height() / 2 + KPOS, ()=> {sac(width() / 1.035, height() / 2 + KPOS, "Raina",() => {death("Raina")}, () => {cancel()})}, "Hurts Enemies with acid rain")

 addChild("Ivy", width() / 1.035, height() / 2 + 2 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 2 * KPOS, "Ivy",() => {death("Ivy")}, () => {cancel()})}, "Poisons enemies")

 addChild("Dwayne", width() / 1.035, height() / 2, ()=> {sac(width() / 1.035, height() / 2, "Dwayne",() => {death("Dwayne")}, () => {cancel()})}, "Creates an earthquake")

 addChild("Shuihaizi", width() / 1.035, height() / 2 + 3 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 3 * KPOS, "Shuihaizi",() => {death("Shuihaizi")}, () => {cancel()})}, "Creates a Tsunami")

 addChild("Bartholomew", width() / 1.035, height() / 2 + 3.9 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 3.9 * KPOS, "Bartholomew",() => {death("Bartholomew")}, () => {cancel()})}, "Decapitate enemies with hats")


    function spawnPretzel() {
        add([
            sprite("pretzel"),
            area(),
            pos(0, rand(0, height())),
            health(Phealth),
            "enemy",
            { speed: rand(pretzelSpeed * 0.5, pretzelSpeed * 1.5) },

        ])
    }

    onCollide("bullet", "enemy", (b, e) => {
        destroy(b),
            e.health = e.heatlh - 2
    })


    onUpdate("tr", (t)=>{
        destroy(t)
    })

})

function addChild(name, posx, posy, sac, power) {
    const child = add([
        sprite(name),
        scale(KSCALE),
        area(),
        pos(posx, posy),
        origin("center"),
        name
    ])
    child.onClick(sac)

    
    

    child.onUpdate(() => {
        if (child.isHovering()) {
           
            add([
                pos(posx, posy - NPOS),
                text(name),
                origin("center"),
                "tr"
            ])

            add([
                 pos(posx - 1.5*NPOS, posy),
                text(power,{
                    width: 100,
                }),
                origin("center"),
                "tr"
            ])
        } else{
            
        }

    })
}


function sac(posX, posY, name, Sacrifice, Cancel){
    const Sacr = add([
        text("Sacrifice " + name,{
            width: 88,
        }),
         pos(posX - 3.5*NPOS, posY - NPOS),
         origin("center"),
         color(0,300,0),
         area({ cursor: "pointer", }),
     ])
     Sacr.onClick(Sacrifice)
     Sacr.onClick(()=>{
        cancel.destroy()
        Sacr.destroy()
        destroyAll(name)
    })

    const cancel = add([
       text("Cancel"),
        pos(posX - 3.5*NPOS, posY + NPOS),
        origin("center"),
        color(300,0,0),
        area({ cursor: "pointer", }),
    ])
    cancel.onClick(Cancel)
    cancel.onClick(()=>{
        cancel.destroy()
        Sacr.destroy()
    })

}

function death (name){
    add([
        pos(width()/2, height()/10),
        text("You Sacrificed " + name + " for the greater good.",{
            size: 50,
            width: 1000,
        }),
        origin("center"),
        color(300,200,100),
    ]) 
}

function cancel (){

}
