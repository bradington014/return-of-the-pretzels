import {PretzelCount, pretzelSpeed, attacking, pretzelDeaths, PretzelCountTF} from "./battle.js"
import{waveNum} from "./battle.js"



function wave1() {
    if(pretzelDeaths == 5){
        PretzelCountTF == "false"
        console.log('wave 2') 
        waveNum++
        console.log(waveNum)
        
        const pressK = add([
            text("Press K to start wave 2"),
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
    }
    onKeyPress('k', () => {
        if (PretzelCountTF == "false") {
            PretzelCountTF == "true"
        }
    })
}

let wave2 = function wave2() {
    
   // PretzelCount = 0

    

}

function wave3() {
    if (pretzelDeaths === 20) {
        PretzelCount = 0
        text("press k to start wave 3"),

        pretzelSpeed = 100,
        { speed: rand(pretzelSpeed * 0.5, pretzelSpeed * 1.5) }
    }
}

function wave4() {
    
}

function wave5() {
    
}

function wave6() {
    
}

function wave7() {
    
}

function wave8() {
    
}

function wave9() {
    
}

function wave10() {
    
}

export{wave1, wave2};
