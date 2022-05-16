scene("tutorial", () => {

const tutorialText = add([
    text("these are the instructions."),
])

const pressA = add([

	text("Press A to move up.", {
		size: (width()+height())/50
	}),
	scale(.5),
	pos(width()/2,height()/6 - 60),
	origin("center"),

])

const pressD = add([

	text("Press D to move down", {
		size: (width()+height())/50
	}),
	scale(.5),
	pos(width()/2,height()/6 - 30),
	origin("center"),

])

const pressspace = add([

	text("Press Space Bar to shoot arrows at enemies.", {
		size: (width()+height())/50
	}),
	scale(.5),
	pos(width()/2,height()/6 + 0),
	origin("center"),

])

const hoverkids = add([

	text("Hover over a child to read their bio.", {
		size: (width()+height())/50
	}),
	scale(.5),
	pos(width()/2,height()/6 + 30),
	origin("center"),

])

const clickkids = add([

	text("Click a kid to sacrifice it.", {
		size: (width()+height())/50
	}),
	scale(.5),
	pos(width()/2,height()/6 + 60),
	origin("center"),

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