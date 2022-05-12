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

scene("battle", () => {
    

    layers(['background', 'bio', 'wall', 'obj'], 'bio')
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
        layer("bio"),

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
                layer("obj"),
                "tr",

            ])

            add([
                rect(width()/4, height()/6),
                pos(posx - 200, posy),
                origin("center"),
                color(0,0,0),
                layer("bio"),
                "tr",
            ])
            add([
                 pos(posx - 200, posy),
                text(power,{
                    width: width()/4,
                }),
                origin("center"),
                layer("obj"),
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
    if(name = "lars"){
        larsPowers()
    } else if(name = "tex"){
        texPowers()
    }
}

function cancel (){

}
