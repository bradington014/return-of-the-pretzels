//sounds
loadSound("titleMusic","music/pretztitle.mp3");
loadSound("swords","music/swords.mp3");

scene("title" , () => { 




const music = play("titleMusic", {
	loop: true,
  volume: 0.1,
})


const title = add([
    text("REVENGE OF THE PRETZELS", {
        size: (width()+height())/40
    }),
    scale(1),
    pos(width()/2,height()/6),
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

	btn.onClick(() => {
		play("swords")
		
	})

	btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.color = rgb(
				wave(0, 255, t),
				wave(0, 255, t + 2),
				wave(0, 255, t + 4),
			)
			btn.scale = vec2(1.2)
		} else {
			btn.scale = vec2(1)
			btn.color = rgb()
		}
	})

}

addButton("Play", vec2(width()/2, height()/3), () => go("battle"))
addButton("Instructions", vec2(width()/2, height()/2), () => go("tutorial"))
})