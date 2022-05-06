import {k} from "./kaboom.js";

loadSprite("background", "assets/sapbackground.png");

scene('game', () => {

    layers(['background', 'obj'], 'obj')
    add([ sprite("background", {width: width(), height: height()})
    ]);
  
  add([
    text('hey there person'),
    pos(120, 80),
    scale(5),
])

});

go('game');

  