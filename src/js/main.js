'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
var asd = null

document.addEventListener('DOMContentLoaded', main)
document.addEventListener('keydown', handleKey)

function main() {
    createCanvas()
    asd = setInterval(gameLoop, 1000 / fps)
}

function createCanvas() {
    canvas.width = canvasSize.width
    canvas.height = canvasSize.height
    canvas.style.border = '1px solid black'
    document.body.appendChild(canvas)
}
function gameLoop() {
    update()
    draw()
}

function update() {
    const head = snake.body[0]
    const oldHead = Object.assign({}, snake.body[0])
    var newHead = Object.assign({}, head)
    if (snake.direction === 'right') newHead.x += 1
    if (snake.direction === 'down') newHead.y += 1
    if (snake.direction === 'left') newHead.x -= 1
    if (snake.direction === 'up') newHead.y -= 1

    snake.body.unshift(newHead)
    snake.body.pop()
}

function draw() {
    drawBoard()
    drawSnake()
}

function drawRect(x, y, w, h, fillStyle = 'white', strokeStyle = 'black') {
    ctx.beginPath()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.rect(x, y, w, h)
    if (fillStyle !== null) ctx.fill()
    if (strokeStyle !== null) ctx.stroke()
}