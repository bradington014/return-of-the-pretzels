scene("story", () => {
    const story = add([
        text("this is the story.", {
            size: (width()+height())/50
        }),
        pos(width()/3.5, height()/3.5)
    ])
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
