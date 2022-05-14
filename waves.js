import {PretzelCount, pretzelSpeed, attacking, pretzelDeaths, PretzelCountTF} from "./battle.js"
import{waveNum} from "./battle.js"



function wave1(wave,TF,C, D) {
    if(pretzelDeaths === 5){
       // PretzelCountTF === "false"
        wave = wave + 1
        TF = "false"
        console.log('wave 2') 
        console.log(wave)
        console.log(TF)
        console.log(C)
        
        const pressK2 = add([
            text("Press L to start wave 2"),
            color(0, 300, 0),
            pos(width()/2 - 50, height()/2),
            origin("center"),
            scale(3.7),
        ])
    
        pressK2.onUpdate(()=>{
            if(TF == "true"){
            pressK2.destroy()
            }
        })
    }
    onKeyPress("l", () => {
        if (TF == "false") {
            TF = "true"
            C = 10
           // let pretzelDeaths = 0
            console.log("pretzelDeaths =" + pretzelDeaths)
            console.log(PretzelCount)
            console.log(PretzelCountTF)
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
