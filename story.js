scene("story", () => {
    const storyTextOne = add([
        text("For years, the pretzels and the humans have fought endlessly...", {
            size: (width()+height())/100,
        }),
        pos(width()/7.5 , height()/6),
    ])
    wait(3, () => {
    const storyTextTwo = add([  
            text("But when the king pretzel's life was gruesomely taken by the humans,", {
                size: (width()+height())/100,
            }),
            pos(width()/9.25, height()/3.5),
    ])
})
    wait(6, () => {
    const storyTextThree = add([  
            text("The Pretzels began their final siege.", {
                size: (width()+height())/100,
            }),
            pos(width()/3.5, height()/2.5),
    ])
})
    wait(12, () => {
        go("title")
    })
    const skipText = add([
        text("Press 'space' to skip to title.", {
            size: (width()+height())/100
        }),
        pos(width()/1.7, height()/1.1)
    ])
    onKeyPress("space", () => {
        go('title');
    })
})
