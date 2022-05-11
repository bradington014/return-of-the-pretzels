
scene("battle", () => {
    const fatherSpeed = height() * 7
    const pretzelSpeed = 120
    const health = 10
    const Phealth = 5
    const BSpeed = 700
    const TIME_COUNT = 0
    const KPOS = height() / 9
    const KSCALE = height() / 2500
    var FMove = 5
    var BDMG = 1
    var wave = 0

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
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 - KPOS),
        origin("center"),
    ])

    // sprite("name"),
    // scale(KSCALE),
    // area(),
    // pos(width()/1.1,height()/2 - 2*KPOS),
    // origin("center"),
    // "Tex"
    function addChild(name, posx, posy, sac) {
        const child = add([
            sprite(name),
            scale(KSCALE),
            area(),
            pos(posx, posy),
            origin("center"),
            //  name
        ])
        child.onClick(sac)
    }

    scene("TexScene", () => {
        add([
            rect(50, 48),
            area(),
            pos(width() / 2, height() / 2),
            origin("center"),
            color(127, 127, 255),
            outline(4),
        ])
    })
    
    addChild("Tex", width() / 1.1, height() / 2 - 2 * KPOS, "TexScene")



   

    //Tex.onClick(go("TexScene"))
    // onUpdate("Tex", (t)=>{
    //     if(mousePos().x > width()/1.1){
    //         onClick(go("TexScene"))
    //     }
    // })



    const Shelldon = add([
        sprite("Shelldon"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 - 3 * KPOS),
        origin("center"),
    ])

    const Rainette = add([
        sprite("Rainette"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 - 4 * KPOS),
        origin("center"),
    ])

    const Raina = add([
        sprite("Raina"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 + KPOS),
        origin("center"),
    ])

    const Ivy = add([
        sprite("Ivy"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 + 2 * KPOS),
        origin("center"),
    ])

    const Dwayne = add([
        sprite("Dwayne"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2),
        origin("center"),
    ])

    const Shuihaizi = add([
        sprite("Shuihaizi"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 + 3 * KPOS),
        origin("center"),
    ])

    const Bartholomew = add([
        sprite("Bartholomew"),
        scale(KSCALE),
        area(),
        pos(width() / 1.1, height() / 2 + 4 * KPOS),
        origin("center"),
    ])

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


















})