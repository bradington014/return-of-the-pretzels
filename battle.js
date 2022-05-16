import {larsPowers} from "./powers.js"
import{texPowers} from "./powers.js"
import{shelldonPowers} from "./powers.js"
import{rainettePowers} from "./powers.js"
import{rainaPowers} from "./powers.js"
import{ivyPowers} from "./powers.js"
import{dwaynePowers} from "./powers.js"
import{shuihaiziPowers} from "./powers.js"
import{bartholomewPowers} from "./powers.js"
import{shelldonPowerCollide} from "./powers.js"
import{larsPowerCollide} from "./powers.js"
import{PTIME_COUNT} from "./powers.js"
import{texPowerCollide} from "./powers.js"
import{rainettePowerCollide} from "./powers.js"


//sounds
loadSound("shot","music/shot.mp3");
loadSound("musicB","music/battle music.mp3");


export {PretzelCount, pretzelSpeed, pretzelDeaths, PretzelCountTF};
export {attacking};
export{waveNum};


    const music = play("musicB", {
      loop: true,
        volume: 0.1,
    })


    const fatherSpeed = height() * 7

    let pretzelSpeed = 100

    let Phealth = 3
    const BSpeed = 700
    const KPOS = height() / 9
    const NPOS = height()/23
    const WPOS = height()/13.2
    const KSCALE = (height() + width ()) / 6875
    const BKSCALE = (height() + width ()) / 5500
    const NtextScale = 1
    const BtextScale = 1.25
    const wS = .5
    let waveNum = 0
    let TIME_COUNT = 0
    let AKSCALE = KSCALE
    var wHealth = 10
    var FMove = 5
    var BDMG = 1
    var BRELOAD = 3
    var KSPEED = 100
    var TexScript = "false"
    var point = 9
    var holder = "tr"
    var stay = "true"
    var PretzelCountTF = "false"
    let attacking = "false"
    let pretzelDeaths = 0
    var PretzelCount = 5

    scene("battle", () => {

        //resetting every variable

        const fatherSpeed = height() * 7
        pretzelSpeed = 100
        Phealth = 3
        const BSpeed = 700
        const KPOS = height() / 9
        const NPOS = height()/23
        const WPOS = height()/13.2
        const KSCALE = (height() + width ()) / 6875
        const BKSCALE = (height() + width ()) / 5500
        const NtextScale = 1
        const BtextScale = 1.25
        const wS = .5
        waveNum = 0
        TIME_COUNT = 0
        AKSCALE = KSCALE
        wHealth = 10
        FMove = 5
        BDMG = 1
        BRELOAD = 3
        KSPEED = 100
        TexScript = "false"
        point = 9
        holder = "tr"
        stay = "true"
        PretzelCountTF = "false"
        attacking = "false"
        pretzelDeaths = 0
        PretzelCount = 5


    layers(['background', 'wall', 'obj', 'top', 'bio'], 'wall')
    add([sprite("background", { width: width(), height: height() })
    ]);


    const wlhealth = add([
        text(),
        color(0,300,0),
        pos(width()/1.2, height()/18),
        layer("bio"),
        origin("center"),
        
    ])

    wlhealth.onUpdate (() => {
        wlhealth.text = wHealth
    })
// starts the pretzels coming at you
onKeyPress("k", ()  => {
    if(PretzelCountTF == "false" && waveNum === 0){
    //wave1()
    timer.time = 0
    PretzelCountTF = "true"
    waveNum = 1
    }else if(PretzelCountTF == "true"){

    }
    
}
    //father.pos.x, father.pos.y
)

const pressK = add([
        text("Press K to start begin the battle"),
        color(0, 300, 0),
        pos(width()/2 - 50, height()/2),
        origin("center"),
        scale(3.7),
    ])

    pressK.onUpdate(()=>{
        if(PretzelCountTF == "true"){
        pressK.destroy()
        }
    })



    const timer = add([
        text('0'),
        pos(50, 50),
        scale(2),
        layer('obj'),
        "timer",
        {
            time: TIME_COUNT,
        },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)


    })


    function spawnBullet(p, s) {
        add([
            sprite("arrow"),
            //rect(24, 6),
            area(),
            pos(p, s),
            origin("center"),
            //color(127, 127, 255),
            //outline(4),
            move(0, -BSpeed),
            layer("top"),
            cleanup(),
            "bullet",
        ])
    }


    onKeyDown("up", () => {

        if (father.pos.y > 0 + 25 && father.pos.y < height()) {
            father.move(0, -KSPEED)
           
        }
    })

    onKeyDown("down", () => {

        if (father.pos.y < height() - 25 && father.pos.y > 0) {
            father.move(0, KSPEED)
        }
    })

    onKeyPress("space", ()  => {
        spawnBullet(father.pos.x, father.pos.y)
        play("shot");

    })

    onKeyPress("left", ()  => {
        spawnBullet(father.pos.x, father.pos.y)

        spawnBullet(father.pos, father.pos.y - 150)
        spawnBullet(father.pos.x, father.pos.y - 250)
        spawnBullet(father.pos.x, father.pos.y - 350)
        spawnBullet(father.pos.x, father.pos.y - 50)
        spawnBullet(father.pos, father.pos.y + 150)
        spawnBullet(father.pos.x, father.pos.y + 250)
        spawnBullet(father.pos.x, father.pos.y + 350)
        spawnBullet(father.pos.x, father.pos.y + 50)
        spawnBullet(father.pos, father.pos.y - 100)
        spawnBullet(father.pos.x, father.pos.y - 200)
        spawnBullet(father.pos.x, father.pos.y - 300)
        spawnBullet(father.pos.x, father.pos.y - 400)
        spawnBullet(father.pos, father.pos.y + 100)
        spawnBullet(father.pos.x, father.pos.y + 200)
        spawnBullet(father.pos.x, father.pos.y + 300)
        spawnBullet(father.pos.x, father.pos.y + 400)
        spawnBullet(father.pos.x, father.pos.y + 75)
        spawnBullet(father.pos.x, father.pos.y - 75)
    })

    const father = add([
        sprite("father"),
        scale(KSCALE),
        pos(width()/1.15, height() / 2),
        origin("center"),
        layer("top"),
    ])


function wall(posY){
    const wall = add([
        sprite("wall"),
        area(),
        pos(width() / 1.2, posY),
        origin("center"),
        layer("wall"),
        scale(wS),
        "wall",

    ])
}

wall(height()/2)
wall(height()/2 - WPOS)
wall(height()/2 - 2*WPOS)
wall(height()/2 - 3*WPOS)
wall(height()/2 - 4*WPOS)
wall(height()/2 - 5*WPOS)
wall(height()/2 - 6*WPOS)
wall(height()/2 + WPOS)
wall(height()/2 + 2*WPOS)
wall(height()/2 + 3*WPOS)
wall(height()/2 + 4*WPOS)
wall(height()/2 + 5*WPOS)
wall(height()/2 + 6*WPOS)


   
    

 
addChild("Lars", width()/1.035, height() / 2 - KPOS, ()=> {sac(width()/1.035, height() / 2 - KPOS, "Lars", () => {death("Lars")}, () => {cancel()})},"Moves into the field and when hit, freezes the entire field. - 8 years old. Favorite pastime: sledding. Favorite food: hot chocolate. Favorite Movie: Frozen. Favorite color: blue. Lars enjoys playing with his friends, building snowmen, and reading bedtime stories with his dad. Lars gets good grades in school, and is good at sports like skiing and sledding. When he grows up, he wants to build a nonprofit organization to help lost reindeer find families.")  

 addChild("Tex", width() / 1.035, height() / 2 - 2 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 2 * KPOS, "Tex",() => {death("Tex")}, () => {cancel()})}, "When hit, turns the field to fire. - 9 years old. Favorite BBQ sauce: Sweet Baby Ray’s. Favorite Horse: Anything that rides and jumps good enuf to get me around. Favorite Toy: Rocking horse that he built himself when he was 4. Tex is your typical sweet southern boy. He likes lassoing cattle and watching sunsets with his sweetheart, Sally. When he grows up, he wants to be an activist to fight predatory farming corporations to protect family farms. He also helps run the special needs baseball league in his county.")

 addChild("Shelldon", width() / 1.035, height() / 2 - 3 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 3 * KPOS, "Shelldon",() => {death("Shelldon")}, () => {cancel()})}, "Moves into the field and when hit, slows down the entire field. - 6 years old. Favorite class in school: Lunch. Favorite hobby: Tai chi. Shelldon likes hanging out with his friends and meditating. He is an excellent student, and competes at a high level in national math competitions, although he needs extra time on some tests because he’s so slow. When he grows up, he wants to start a slow motion video youtube channel. Shelldon spends his spare time reading poetry for people in nursing homes.")

 addChild("Raina", width() / 1.035, height() / 2 - 3.9 * KPOS, ()=> {sac(width() / 1.035, height() / 2 - 3.9 * KPOS, "Raina",() => {death("Raina")}, () => {cancel()})}, "Creates clouds of acid rain that hurts the entire field . - 5 years old. Favorite Cartoon: Amazing world of gumball. Favorite Food:  lunchables and cotton candy flavored ice cream. Favorite Colors: Purple and Light Green. Raina likes to gossip with her kindergarten friends and enjoys playing with all the kindergarten boys. When Raina grows up she wants to start a cancer research facility.")

 addChild("Rainette", width() / 1.035, height() / 2 + KPOS, ()=> {sac(width() / 1.035, height() / 2 + KPOS, "Rainette",() => {death("Rainette")}, () => {cancel()})}, "Showers the field with arrows that kill enemies and also kill herself -  5 years old. Favorite superhero: Hawkeye. Favorite book: The Hunger Games. Rainette is a generally happy kid. She struggles with dyslexia, but still loves kindergarten. She and her sister, Raina, love playing tag and kickball with the other neighborhood kids. Sometimes when she gets mad, Rainette accidentally pops the ball with an arrow, but always apologizes and uses her skills as a master leatherworker to make a new ball for everyone.")

 addChild("Ivy", width() / 1.035, height() / 2 + 2 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 2 * KPOS, "Ivy",() => {death("Ivy")}, () => {cancel()})}, "Makes pools of poison rise from the ground and deal damage to enemies. 8 years old. Ivy is the queen of her 3rd grade class. She owns the lunch trading economy. She’s fluent in 8 languages including Dutch, Latin, Swahili, and Ancient Egyptian. She is the youngest acting US ambassador, and was the 138 recipient of the Nobel Peace prize. Ivy does have a toxic trait though, she can spawn pools of poison on the ground. Ivy’s favorite disney character is the horse from Mulan followed closely by the dead wife from UP. Ivy wants to be a CEO when she grows up.")

 addChild("Dwayne", width() / 1.035, height() / 2, ()=> {sac(width() / 1.035, height() / 2, "Dwayne",() => {death("Dwayne")}, () => {cancel()})}, "rolling boulders from where he collides. Do damage and push back enemies.  - 6 years old. Favorite movie: Central Intelligence. Dwayne does not have much hair, but is not phased by this. He is passionate about working out, and has some ambitions to act and sing on broadway. Dwayne spends a lot of time with his best friend, Kevin, and often protects Kevin from school bullies. Pet Peeve: People who aren’t nice.")

 addChild("Shuihaizi", width() / 1.035, height() / 2 + 3 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 3 * KPOS, "Shuihaizi",() => {death("Shuihaizi")}, () => {cancel()})}, "Moves into the field and on collide with enemy, does damage and pushes enemies back with water. -  7 years old. Favorite movie: The Impossible. Favorite food: sushi. Favorite ocean: Pacific. Shui Haizi spends time with her friends playing in the sandbox at school. Her favorite subject in school is science, but she is doing well in all her classes. When she gets good grades on tests, she likes to go to the aquarium. Shuihaizi is an avid surfer, and when she grows up she wants to become a lifeguard or work in the aquarium. ")

 addChild("Bartholomew", width() / 1.035, height() / 2 + 3.9 * KPOS, ()=> {sac(width() / 1.035, height() / 2 + 3.9 * KPOS, "Bartholomew",() => {death("Bartholomew")}, () => {cancel()})}, "Throws hats that decapitate enemies before he’s killed. - 9 Years old. Favorite member of the Wu-Tang Clan: Method Man. In his spare time, Bartholomew builds marionette dolls to put on puppet shows for the local orphans. He picks cranberries to make a living, but dreams of making it big in the hat making business when he grows up." 
 )


    function spawnPretzel() {
       
        const enemy = add([
            sprite("pretzel"),
            area(),
            pos(0, rand(35, height()-30)),
            layer("top"),
            scale(1.4),
            origin("center"),
            health(Phealth),
          //  setHP(5),
            "enemy",
            { speed: rand(pretzelSpeed * 0.5, pretzelSpeed * 1.5) },
        ])
    }

    onUpdate("enemy", (e) =>{
        e.move(e.speed,0)
    })
    

    

    onUpdate("timer", (t) =>{
            if(PretzelCountTF == "true" && timer.text % 1 === 0 && PretzelCount > 0){
                spawnPretzel()
                // PretzelCount = PretzelCount - 1
            } 
    })


    onCollide("bullet", "enemy", (b, e) => {
        destroy(b)
            e.hurt(1)
            if(e.hp() <= 0){
                destroy(e)
               pretzelDeaths = pretzelDeaths + 1
               console.log(pretzelDeaths)
            }

    })
   

    onCollide("enemy", "wall", (e) =>{
        destroy(e)
        if(wHealth > 0){
            wHealth = wHealth - 1
        } if (wHealth <= 0){
            go("lose")
        }
    })


    onUpdate(()=>{
        if (waveNum === 1) {
           // PretzelCountTF = "false"
            wave1()
         }else if (waveNum === 2) {
            wave2()
        } else if (waveNum === 3) {
            wave3()
        } else if (waveNum === 4) {
            wave4()
        } else if (waveNum === 5) {
            wave5()
        } else if (waveNum === 6) {
            wave6()
        } else if (waveNum === 7) {
            wave7()
        } else if (waveNum === 8) {
            wave8()
        } else if (waveNum === 9) {
            wave9()
        } else if (waveNum === 10) {
            wave10()
        } 
    })

    onUpdate("tr", (t)=>{
        destroy(t)
    })
    onUpdate("af", (t)=>{
        destroy(t)
    })

})

function addChild(name, posx, posy, sac, power) {
    const child = add([
        sprite(name),
        scale(AKSCALE),
        area(),
        pos(posx, posy),
        origin("center"),
        name
    ])

    child.onClick(sac)
    
    

    child.onUpdate(() => {
        if (child.isHovering()) {
            child.scale = BKSCALE
            const pName = add([
                pos(posx, posy - NPOS),
                text(name),
                origin("center"),
                layer("bio"),
               // holder,

            ])

            const pName2 = add([
                pos(width()/1.225, height()/2.85),
                text(name),
                origin("center"),
                layer("bio"),
                scale(2),
                color(200,100,150),
               // holder,

            ])

            const backBio = add([
                rect(width()/4, height()/3),
                pos(width()/1.225, height()/2),
                origin("center"),
                color(0,0,0),
                layer("obj"),
               // holder,
            ])
           const bio =  add([
                 pos(width()/1.225, height()/2),
                text(power,{
                    width: width()/4,
                    size: (height() + width()) / 180
                }),
                color(300,300,0),
                origin("center"),
                layer("bio"),
               // holder,
            ])

          
            pName.onUpdate(()=>{
                pName.destroy()
            })

            pName2.onUpdate(()=>{
                pName2.destroy()
            })

            backBio.onUpdate(()=>{
                backBio.destroy()
            })

            bio.onUpdate(()=>{
                bio.destroy()
            })
            
        } else{
            child.scale = (AKSCALE)
        }

    })
}


function sac(posX, posY, name, Sacrifice, Cancel){
    console.log(stay)
    if (stay == "true"){
    const Sacr = add([
        text("Sacrifice " + name,{
            width: 220,
            size: 25
        }),
         pos(width()/1.225,height()/4.5),
         origin("center"),
         color(0,300,0),
         area({ cursor: "pointer", }),
         layer("bio"),
         scale(NtextScale),
     ])
     Sacr.onClick(Sacrifice)
     Sacr.onClick(()=>{
        cancel.destroy()
        Sacr.destroy()
        back.destroy()
        destroyAll(name)
        stay = "true"
           // holder = "tr"
    })
        Sacr.onUpdate(() =>{ 
        if(Sacr.isHovering()){
            Sacr.scale = BtextScale
        } else{
            Sacr.scale = NtextScale
        }
    })

    

    const cancel = add([
       text("Cancel",{
           size:25,
       }),
        pos(width()/1.225, height()/3.5),
        origin("center"),
        color(300,0,0),
        area({ cursor: "pointer", }),
        layer("bio"),
    ])
    cancel.onClick(Cancel)
    cancel.onClick(()=>{
        cancel.destroy()
        Sacr.destroy()
        back.destroy()
        stay = "true"
       // holder = "tr"
    })

    cancel.onUpdate(() =>{ 
        if(cancel.isHovering()){
            cancel.scale = BtextScale
        } else{
            cancel.scale = NtextScale
        }
    })

    const back = add([
        rect(width()/6, height()/7),
         pos(width()/1.225, height()/4),
         origin("center"),
         color(0,100,200),
         layer("obj"),
    ])
    stay = "false"    
}


}

function death (name){
    add([
        pos(630, height()/10),
        rect(1000,100,1000,100),
        text("You Sacrificed " + name + " for the greater good.",{
            size: 50,
            width: 1000,
        }),
        origin("center"),
        color(300,200,100),
        lifespan(2, { fade: 0.5 }),
    ]) 
    if(name == "Lars"){
        larsPowers()
    } else if(name == "Tex"){
        texPowers()
    } else if(name == "Shelldon"){
        shelldonPowers()
    } else if(name == "Rainette"){
        rainettePowers()
    } else if(name == "Raina"){
        rainaPowers()
    } else if(name == "Ivy"){
        ivyPowers()
    } else if(name == "Dwayne"){
        dwaynePowers()
    } else if(name == "Shuihaizi"){
        shuihaiziPowers()
    } else if(name == "Bartholomew"){
        bartholomewPowers()
    }

    shelldonPowerCollide()
    larsPowerCollide()
    texPowerCollide()
    rainettePowerCollide()
}

function cancel (){
   
}


function wave1() {
    if(pretzelDeaths === 5){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 2"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false" && waveNum === 1) {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 5
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave2(){

    pretzelSpeed = 125
    Phealth = 4


    if(pretzelDeaths === 6){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 3"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 6
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave3(){

    pretzelSpeed = 150
    Phealth = 5


    if(pretzelDeaths === 7){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 4"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 7
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave4(){

    pretzelSpeed = 160
    Phealth = 5


    if(pretzelDeaths === 8){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 5"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 8
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave5(){

    pretzelSpeed = 200
    Phealth = 6


    if(pretzelDeaths === 9){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 6"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 9
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave6(){

    pretzelSpeed = 200
    Phealth = 7

    if(pretzelDeaths === 10){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 7"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 10
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave7(){

    pretzelSpeed = 215
    Phealth = 7

    if(pretzelDeaths === 12){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 8"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 12
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave8(){

    pretzelSpeed = 230
    Phealth = 8

    if(pretzelDeaths === 14){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 9"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 14
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave9(){

    pretzelSpeed = 245
    Phealth = 9

    if(pretzelDeaths === 15){
        PretzelCountTF = "false"
        
        const pressL = add([
            text("Press L to start wave 10"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressL.onUpdate(()=>{
            if(PretzelCountTF == "true"){
            pressL.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF = "true"
            timer.time = 0
            pretzelDeaths = 0
            PretzelCount = 15
            waveNum = waveNum + 1
            console.log("pretzelDeaths = " + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
        }
    })
}

function wave10(){

    pretzelSpeed = 250
    Phealth = 10

    if(pretzelDeaths === 20){
        PretzelCountTF = "false"
        go('win')
    }
}

scene("win",() =>{


    const title = add([
        text("You Won!", {
            size: (width()+height())/30
        }),
        scale(1),
        pos(width()/2,height()/6),
        origin("center")
    ])

    const subtitle = add([
        text("You defeated all of the aggressive pretzels and defended your kingdom!", {
            size: (width()+height())/60
        }),
        scale(.5),
        pos(width()/2,height()/6 + 50),
        origin("center")
    ])
    
    function addButton(txt, p, f) {
    
        const btn = add([
            text(txt,{
                size: (width()+height())/50
            }),
            scale(1),
            pos(p),
            area({ cursor: "pointer", }),
            origin("center"),
        ])
    
        btn.onClick(f)
    
        btn.onUpdate(() => {
            if (btn.isHovering()) {
                const t = time() * 10
                btn.color = rgb(

                    wave(255, 255, t),
                    wave(255, 255, t + 2),
                    wave(255, 255, t + 4),

                )
                btn.scale = vec2(1.2)
            } else {
                btn.scale = vec2(1)
                btn.color = rgb()
            }
        })
    
    }
    
    addButton("Play Again!", vec2(width()/2, height()/3), () => go("battle"))
    addButton("Home", vec2(width()/2, height()/2), () => go("title"))

})