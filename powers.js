import "./battle.js";
import{pretzelSpeed} from "./battle.js"
import{Phealth} from "./battle.js"



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
        lifespan(10),
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
        color(70,205,70),
        area(),
        opacity(.5),
        origin("center"),
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
        color(127,1,254),
        area(),
        opacity(.5),
        origin("center"),
        lifespan(.1),
        layer("wall"),
        'ivypowerup',
        play("poisinspell"),
    ])
}

let dwaynePowers = function dwaynePowers(){
    add([
        rect(width()/16,height()),
        pos(width()/1.2,height()/2),
        color(181, 101, 30),
        area(),
        opacity(.5),
        origin("center"),
        lifespan(8),
        layer("wall"),
        'dwaynepowerup',
        move(0, -width()/4)
    ])
}

let shuihaiziPowers = function shuihaiziPowers(){
    add([
        rect(width()/16,height()),
        pos(width()/1.2,height()/2),
        color(0, 105, 148),
        area(),
        opacity(.5),
        origin("center"),
        lifespan(8),
        layer("wall"),
        'shuihaizipowerup',
        move(0, -width()/4)
    ])
}

let bartholomewPowers = function bartholomewPowers(){
    const bart = add([
        rect(width()/16,height()/20),
       // pos(rand(0, width()/1.2), rand(0, height())),
       pos(width()/2.475, height()/2),
        color(220,220,220),
        area({
            width: 50,
            height: 25,
        }),
        opacity(.5),
        origin("center"),
        lifespan(5),
        layer("wall"),
        'bartholomewpowerup',
        move(rand(0,width()), rand(0, height()))
    ])
}

let shelldonPowerCollide = function shelldonPowerCollide(){
    onCollide('enemy','shelldonpowerup', (e)=>{
        e.speed = e.speed / 2
        e.color = rgb(204,204,0)
    })
}

let larsPowerCollide = function larsPowerCollide(){
    onCollide('enemy','larspowerup', (e)=>{
        e.speed = 0,
        e.color = rgb(55, 215, 248)
        e.play("idle")
       //e.use(sprite("frozenPretzel"))
     
        wait(9, () => {
            e.speed = pretzelSpeed;
          //  e.use(sprite("pretzel"))
         //   e.text = e.hp()
         e.play("run")
           e.color = rgb()
        })
        
        
    })

}

let texPowerCollide = function texPowerCollide(){
    onCollide('enemy','texpowerup', (e)=>{
        e.hurt(1),
        e.text = e.hp()
        e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb(251,139,35)
            })
        wait(.75, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb(251,139,35)
            })
        })
        wait(1.5, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb(251,139,35)
            })
        })
        wait(2.25, () => {
            e.hurt(1)
            e.text = e.hp()
            e.color = rgb(300,0,0)
            wait(.1, ()=>{
                e.color = rgb(251,139,35)
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
        e.color = rgb(50,205,50)
        e.text = e.hp()
        play("pain1")
    })
}

let bartholomewPowerCollide = function bartholomewPowerCollide(){
    onCollide('enemy','bartholomewpowerup', (e, b)=>{
        e.hurt(e.hp())
        //destroy(b)
    })
}

let ivyPowerCollide = function ivyPowerCollide(){
    onCollide('enemy','ivypowerup', (e)=>{
        e.speed = e.speed / 4
        wait(.1, ()=>{
            e.color = rgb(127,1,254)
        })
    wait(1, () => {
        e.hurt(e.hp()/2)
        e.text = e.hp()
        e.color = rgb(300,0,0)
        wait(.1, ()=>{
            e.color = rgb(127,1,254)
        })
    })
    wait(2, () => {
        e.hurt(e.hp()/2)
        e.text = e.hp()
        e.color = rgb(300,0,0)
        wait(.1, ()=>{
            e.color = rgb(127,1,254)
        })
    })
    wait(3, () => {
        e.hurt(e.hp()/2)
        e.text = e.hp()
        e.color = rgb(300,0,0)
        wait(.1, ()=>{
            e.color = rgb(127,1,254)
        })
    })

    wait(4, () => {
        e.hurt(e.hp()/2)
        e.text = e.hp()
        e.color = rgb(300,0,0)
        wait(.1, ()=>{
            e.color = rgb(127,1,254)
        })
    })
        
    })
}

let dwaynePowerCollide = function dwaynePowerCollide(){
    onCollide('enemy','dwaynepowerup', (e)=>{
        e.hurt(e.hp()/10)
        e.speed = e.speed - e.speed/10
        e.color = rgb(300,0,0)
        wait(.1, () =>{
            e.color = rgb()
        })
        e.text = e.hp().toFixed(2)
        e.pos.x = e.pos.x - e.pos.x/2
        //destroy(b)
    })
}

let shuihaiziPowerCollide = function shuihaiziPowerCollide(){
    onCollide('enemy','shuihaizipowerup', (e)=>{
        e.hurt(e.hp()/6)
        e.color = rgb(300,0,0)
        wait(.1, () =>{
            e.color = rgb()
        })
        e.text = e.hp().toFixed(2)
        e.pos.x = e.pos.x - e.pos.x/2
        //destroy(b)
    })
}











export{larsPowers, texPowers,shelldonPowers, rainettePowers, rainaPowers, ivyPowers, 
    dwaynePowers, shuihaiziPowers, bartholomewPowers, shelldonPowerCollide, larsPowerCollide, 
    texPowerCollide, rainettePowerCollide, rainaPowerCollide, bartholomewPowerCollide, ivyPowerCollide, dwaynePowerCollide, shuihaiziPowerCollide, PTIME_COUNT};
