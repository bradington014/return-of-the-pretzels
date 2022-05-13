
let larsPowers = function larsPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(149,206,214,50),
        'larspowerup'
    ])
}

let texPowers = function texPowers(){
    add([
    rect(width()/2,height()/2),
    pos(width()/2,height()/2),
    color(255,57,0,50),
])
}

let shelldonPowers = function shelldonPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(255,223,81,50),
        'shelldonpowerup'
    ])
}

let rainettePowers = function rainettePowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(173,15,0,50),
    ])
}

let rainaPowers = function rainaPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(122,0,148,50),
    ])
}

let ivyPowers = function ivyPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(0,202,20,50),
    ])
}

let dwaynePowers = function dwaynePowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(300,300,200,50),
    ])
}

let shuihaiziPowers = function shuihaiziPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(250,300,150,50),
    ])
}

let bartholomewPowers = function bartholomewPowers(){
    add([
        rect(width()/2,height()/2),
        pos(width()/2,height()/2),
        color(250,250,50,50),
    ])
}

let shelldonPowerCollide = function shelldonPowerCollide(){
    onCollide('enemy','shelldonpowerup', (e)=>{
        e.pretzelSpeed = 0;
    })
}



export{larsPowers, texPowers,shelldonPowers, rainettePowers, rainaPowers, ivyPowers, dwaynePowers, shuihaiziPowers, bartholomewPowers, shelldonPowerCollide};
