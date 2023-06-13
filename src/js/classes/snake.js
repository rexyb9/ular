function drawSnake() {
    for (let i = 0; i < snake.body.length; i++) {
        const body = snake.body[i]
        var w = canvasSize.width / grid.col
        var h = canvasSize.height / grid.row
        var x = body.x * w
        var y = body.y * h
        var color = (i === 0) ? '#3669c2' : '#487edb'
        drawRect(x, y, w, h, color, 'black')
    }
}