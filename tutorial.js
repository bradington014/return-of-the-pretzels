
loadSound("musicD", "music/beforebattle.wav");

scene("tutorial", () => {

const music4 = play("musicD",{
	loop:true,
	volume: 0.5,
})

const tutorialText = add([
    text("this is the tutorial."),
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
		music4.pause();
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

addButton("back", vec2(width()/2, height()/3), () => go("title"))
})