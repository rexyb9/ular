function handleKey(c) {
    if (c.key === 'ArrowUp')  snake.direction = 'up'
    if (c.key === 'ArrowDown')  snake.direction = 'down'
    if (c.key === 'ArrowLeft')  snake.direction = 'left'
    if (c.key === 'ArrowRight')  snake.direction = 'right'
}