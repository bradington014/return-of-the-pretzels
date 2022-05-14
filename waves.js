import {PretzelCount, pretzelSpeed, attacking, pretzelDeaths} from "./battle.js"
import{waveNum} from "./battle.js"



let wave1 = function wave1() {
    if(pretzelDeaths === 5){
        console.log('wave 2')
         console.log(waveNum)
         waveNum = waveNum + 1
        
    }
    
}

let wave2 = function wave2() {
    
   // PretzelCount = 0

    

}

function wave3() {
    if (pretzelDeaths === 20) {
        PretzelCount = 0
        text("press k to start wave 3!"),

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
