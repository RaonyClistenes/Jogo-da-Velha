const indices = document.querySelectorAll('.tabela');
const apagar = document.querySelector('button')
const span = document.querySelector('footer h3 span')
const body = document.querySelector('body')
const sessions = document.querySelectorAll('section')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const resultado = document.querySelector('#resultado')



const prob = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let O = []
let X = []
let valor = 0


function game() {

    for (let item = 0; item < indices.length; item++) {
        indices[item].innerHTML = ''

        indices[item].addEventListener('click', (evento) => {
            evento.preventDefault()
            evento.stopPropagation()
            valor++

            if (valor % 2 == 0) {
                indices[item].innerHTML = 'O'
                O.push(item)
                span.innerHTML = 'X'
            } else {
                indices[item].innerHTML = 'X'
                X.push(item)
                span.innerHTML = 'O'

            }



            for (let i = 0; i < prob.length; i++) {
                if (prob[i].every((j) => O.includes(j))) {
                    resultado.innerHTML = 'Jogador "O" Ganhou'
                    modalON()
                    point()
                }
                else if (prob[i].every(j => X.includes(j))) {
                    resultado.innerHTML = 'Jogador "X" Ganhou'
                    modalON()
                    point()
                }
                else if (O.length > 4 || X.length > 4) {
                    resultado.innerHTML = 'Deu Velha (Empatou)'
                    modalON()
                    point()
                }
            }
            if (indices[item].innerHTML === 'X' || indices[item].innerHTML === 'O') {
                indices[item].style.pointerEvents = 'none'
            }

        })
    }
}
game()
function teste() {
    for (let i = 0; i < indices.length; i++) {
        indices[i].style.pointerEvents = 'none'

    }
}

function point() {
    for (let index = 0; index < sessions.length; index++) {
        sessions[index].style.pointerEvents = 'none'
    }
}
function reiniciar() {
    apagar.addEventListener('click', () => {
        window.location.reload()
    })
}
reiniciar()
function modalON() {
    modal.classList.remove('hidden')
    fade.classList.remove('hidden')
}