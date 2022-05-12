import "./powers.js";

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
    var BRELOAD = 3
    var KSPEED = 100
    var wave = 0
    var TexScript = "false"
    var point = 9
    var holder = "tr"
    var stay = "true"

scene("battle", () => {
    

    layers(['background', 'wall', 'obj', 'top', 'bio'], 'wall')
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
            layer("top"),
            cleanup(),
            // strings here means a tag
            "bullet",
        ])
    }

    // onKeyPress("up", () => {

    //     if (father.pos.y > 0 && FMove < 9) {
    //         father.move(0, -fatherSpeed)
    //         FMove += 1
    //     }
    // })

    // onKeyPress("down", () => {

    //     if (father.pos.y < height() && FMove > 1) {
    //         father.move(0, fatherSpeed)
    //         FMove -= 1
    //     }
    // })

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
        //father.pos.x, father.pos.y
    })

    const father = add([
        // sprite("father"),
        rect(width() / 28, width() / 28),
        area(),
        color(100,100,300),
        pos(width()/1.15, height() / 2),
        origin("center"),
        layer("top"),
    ])



    const wall = add([
        //sprite("wall"),
        rect(50, height()),
        area(),
        //body(),
        pos(width() / 1.2, height() / 2),
        origin("center"),
        layer("wall"),

    ])


   
    

 
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
    onUpdate("af", (t)=>{
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
    // child.onClick(() =>{
    //     holder = ""
    // })

    // child.onUpdate(()=>{
    //     if(stay = "true"){
    //         child.onClick(sac)
    //     }
    // })

    child.onClick(sac)
    
    

    child.onUpdate(() => {
        if (child.isHovering()) {
           
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
        pos(width()/2, height()/10),
        text("You Sacrificed " + name + " for the greater good.",{
            size: 50,
            width: 1000,
        }),
        origin("center"),
        color(300,200,100),
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
}

function cancel (){
   
}


function larsPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(149,206,214,50),
    ])
}

function texPowers(){
    add([
    rect(width()/2,height()/2),
    pos(500,500),
    color(255,57,0,50),
])
}

function shelldonPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(255,223,81,50),
    ])
}

function rainettePowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(173,15,0,50),
    ])
}

function rainaPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(122,0,148,50),
    ])
}

function ivyPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(0,202,20,50),
    ])
}

function dwaynePowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(300,300,200,50),
    ])
}

function shuihaiziPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(250,300,150,50),
    ])
}

function bartholomewPowers(){
    add([
        rect(width()/2,height()/2),
        pos(500,500),
        color(250,250,50,50),
    ])
}


