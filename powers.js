import "./battle.js";
import{pretzelSpeed} from "./battle.js"

let PTIME_COUNT = 0
let freeze = "false"

let larsPowers = function larsPowers(){
    add([
        rect(width()/1.225,height()),
        pos(width()/2.475,height()/2),
        color(149,206,214,50),
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
    rect(width()/2,height()/2),
    pos(width()/2,height()/2),
    color(255,57,0,50),
    area(),
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
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(173,15,0,50),
        area(),
    ])
}

let rainaPowers = function rainaPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(122,0,148,50),
        area(),
    ])
}

let ivyPowers = function ivyPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(0,202,20,50),
        area(),
    ])
}

let dwaynePowers = function dwaynePowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(300,300,200,50),
        area(),
    ])
}

let shuihaiziPowers = function shuihaiziPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(250,300,150,50),
        area(),
    ])
}

let bartholomewPowers = function bartholomewPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(250,250,50,50),
        area(),
    ])
}

let shelldonPowerCollide = function shelldonPowerCollide(){
    onCollide('enemy','shelldonpowerup', (e)=>{
        e.speed = e.speed / 2
    })
}

let larsPowerCollide = function larsPowerCollide(){
    onCollide('enemy','larspowerup', (e)=>{
        e.speed = 0
        powerTimer()
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




export{larsPowers, texPowers,shelldonPowers, rainettePowers, rainaPowers, ivyPowers, dwaynePowers, shuihaiziPowers, bartholomewPowers, shelldonPowerCollide, larsPowerCollide, PTIME_COUNT};
