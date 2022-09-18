let mario = document.querySelector(".mario")
let pipe = document.querySelector(".pipe")
let clouds = document.querySelector(".clouds")
let gameOver = document.querySelector(".game-over")


let jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    let cloudPosition = clouds.offsetLeft

    if (pipePosition > 390 && pipePosition < 520 && marioPosition < 80 && pipePosition > 0) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.marginLeft = `${cloudPosition}px`

        gameOver.style.display = 'flex'

        clearInterval(loop)
    }

}, 5)

document.addEventListener('keydown', jump)

let restart = () => {
    location.reload()
}