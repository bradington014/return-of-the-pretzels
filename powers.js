import "./battle.js";
import{pretzelSpeed} from "./battle.js"



//sounds
loadSound("pain1","music/pain1.mp3");
loadSound("freeze","music/freeze.mp3");
loadSound("poisinspell","music/poisinspell.mp3");
loadSound("splash","music/splash.mp3");
loadSound("sticky","music/sticky.mp3");

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
        play("freeze"),
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
        lifespan(8),
        layer("wall"),
        'shelldonpowerup',
        play("sticky"),
    ])
  
}

let rainettePowers = function rainettePowers(){
    add([
        rect(width()/1.225,height()/10),
        pos(width()/2.475,0),
        color(160,160,160),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        body(),
        lifespan(10),
        layer("wall"),
        'rainettepowerup',
    ])
}

let rainaPowers = function rainaPowers(){
    add([
        rect(width()/1.225,height()/10),
        pos(width()/2.475,0),
        color(214, 51, 255),
        area(),
        opacity(.5),
        origin("center"),
        area(),
        body(),
        lifespan(5),
        layer("wall"),
        'rainapowerup',
        play("splash"),
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
        'ivyspowerup',
        play("poisinspell"),
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
        
        
    })

}

let texPowerCollide = function texPowerCollide(){
    onCollide('enemy','texpowerup', (e)=>{
        e.hurt(1),
        e.text = e.hp()
        e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb()
            })
        wait(.75, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb()
            })
        })
        wait(1.5, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb()
            })
        })
        wait(2.25, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb()
            })
        })

        wait(3, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb()
            })
        })
        
    })

}

let rainettePowerCollide = function rainettePowerCollide(){
    onCollide('enemy','rainettepowerup', (e)=>{
        e.hurt(e.hp())
    })
}

let rainaPowerCollide = function rainaPowerCollide(){
    onCollide('enemy','rainapowerup', (e)=>{
        e.speed = e.speed / 1.5,
        e.hurt(e.hp()/2),
        play("pain1")
    })
}












export{larsPowers, texPowers,shelldonPowers, rainettePowers, rainaPowers, ivyPowers, 
    dwaynePowers, shuihaiziPowers, bartholomewPowers, shelldonPowerCollide, larsPowerCollide, 
    texPowerCollide, rainettePowerCollide, rainaPowerCollide, PTIME_COUNT};
