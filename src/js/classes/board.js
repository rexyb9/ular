function drawBoard() {
    for (let i = 0; i < grid.col; i++) {
        for (let j = 0; j < grid.row; j++) {
            var w = canvasSize.width / grid.col
            var h = canvasSize.height / grid.row
            var x = i * w
            var y = j * h
            var color = (i % 2 === 0)
                ? (j % 2 === 0) ? '#4fb86a' : '#309c4c'
                : (j % 2 !== 0) ? '#4fb86a' : '#309c4c'
            drawRect(x, y, w, h, color, 'black')
        }
    }
}