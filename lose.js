loadSound("musicC", "music/sacrafice.wav");

import{pretzelDeaths} from "./battle.js"
scene("lose",() =>{
    const music3 = play("musicC", {
        loop: true,
        volume: 0.5,
    })

    const title = add([
        text("You Lost", {
            size: (width()+height())/30
        }),
        scale(1),
        pos(width()/2,height()/6),
        origin("center")
    ])

    const subtitle = add([
        text("The Pretzels broke through your wall and touched all your kids. :(", {
            size: (width()+height())/60
        }),
        scale(.5),
        pos(width()/2,height()/6 + 50),
        origin("center")
    ])
    
    const kill = add([
        text("You killed " + pretzelDeaths + " enemies!",{
        size:(width()+height())/60
        }),

        scale(.5),
        pos(width()/2, height()/20),
        origin("center"),
        color(300,0,0),

    

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

        btn.onClick(() => {
            music3.pause();
            
        })
    
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