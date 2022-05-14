import "./battle.js";
import{pretzelSpeed} from "./battle.js"

let PTIME_COUNT = 0
let freeze = "false"

let larsPowers = function larsPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let texPowers = function texPowers(){
    add([
        rect(width()/15,height()),
        pos(width()/4,height()/2),
        color(255, 17, 0),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(15),
        layer("wall"),
        'texpowerup',
])
}

let shelldonPowers = function shelldonPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(255,223,81),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(5),
        layer("wall"),
        'shelldonpowerup',
    ])
  
}

let rainettePowers = function rainettePowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(160,160,160),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.2),
        layer("wall"),
        'rainettepowerup',
    ])
}

let rainaPowers = function rainaPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let ivyPowers = function ivyPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let dwaynePowers = function dwaynePowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let shuihaiziPowers = function shuihaiziPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let bartholomewPowers = function bartholomewPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        lifespan(.1),
        layer("wall"),
        'larspowerup',
    ])
}

let shelldonPowerCollide = function shelldonPowerCollide(){
    onCollide('enemy','shelldonpowerup', (e)=>{
        e.speed = e.speed / 2
    })
}

let larsPowerCollide = function larsPowerCollide(){
    onCollide('enemy','larspowerup', (e)=>{
        e.speed = 0,
        wait(9, () => {
            e.speed = pretzelSpeed;
        })
        
        powerTimer()
    })

}

let texPowerCollide = function texPowerCollide(){
    onCollide('enemy','texpowerup', (e)=>{
        e.hurt(1),
        wait(1, () => {
            e.hurt(1)
        })
        wait(2, () => {
            e.hurt(1)
        })
        wait(3, () => {
            e.hurt(1)
        })
        powerTimer()
    })

}

let rainettePowerCollide = function rainettePowerCollide(){
    onCollide('enemy','rainettepowerup', (e)=>{
        e.destroy()
    })
}





function powerTimer (){
    const pTimer = add([
        text('0'),
        pos(300, 50),
        scale(2),
        layer('obj'),
        "pTimer",
        {
            time: PTIME_COUNT,
        },
    ])

    pTimer.onUpdate(() => {
        pTimer.time += dt()
        pTimer.text = pTimer.time.toFixed(2)

    })
    

}




export{larsPowers, texPowers,shelldonPowers, rainettePowers, rainaPowers, ivyPowers, 
    dwaynePowers, shuihaiziPowers, bartholomewPowers, shelldonPowerCollide, larsPowerCollide, 
    texPowerCollide, rainettePowerCollide, PTIME_COUNT};
