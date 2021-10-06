const nums = document.querySelectorAll('.nums')
const screen = document.querySelector('h1')
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')
const ops = document.querySelectorAll('.operations')
const decimal = document.querySelector('#dec')
const equals = document.querySelector('#equals')
const sign = document.querySelector('#plus-minus')

let screenValue = 0
let finalValue = 0
let result = 0
let operand = ''

for (let numbers of nums) {
    numbers.addEventListener('click', () => {
        if (operand === '') {
            if (screen.innerText === '0') {
                screen.innerText = ''
            }
        } else if (screen.innerText === operand) {
            screen.innerText = ''
        }
        screen.append(`${numbers.innerText}`)
    })
}

for (let oper of ops) {
    oper.addEventListener('click', () => {
        operand = oper.innerText
        screenValue = parseFloat(screen.innerText)
        if (operand === '+') {
            result += screenValue
        } else if (operand === '-') {
            if (result === 0) {
                result = screenValue
            } else {
                result -= screenValue
            }
        } else if (operand === 'x') {
            if (result === 0) {
                result = screenValue
            } else {
                result *= screenValue
            }
        } else if (operand === '/') {
            if (result === 0) {
                result = screenValue
            } else {
                result /= screenValue
            }
        }
        screen.innerText = oper.innerText
    })
}

equals.addEventListener('click', () => {
    finalValue = parseFloat(screen.innerText)
    if (operand === '+') {
        result += finalValue
    } else if (operand === '-') {
        result -= finalValue
    } else if (operand === '/') {
        result /= finalValue
    } else if (operand === 'x') {
        result *= finalValue
    }
    screen.innerText = result
})

decimal.addEventListener('click', () => {
    if (screen.innerText == operand) {
        screen.innerText = ''
        screen.append('0')
    }
    if (!screen.innerText.includes('.')) {
        screen.append('.')
    }
})

clear.addEventListener('click', () => {
    screen.innerText = 0
    screenValue = 0
    finalValue = 0
    result = 0
    operand = ''
})

backspace.addEventListener('click', () => {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
    } else {
        screen.innerText = 0
    }
})

sign.addEventListener('click', () => {
    if (screen.innerText === operand || screen.innerText === '0') {
        screen.innerText = ''
    }
    if (!screen.innerText.includes('-')) {
        screen.innerText = `-${screen.innerText}`
    } else {
        screen.innerText = screen.innerText.slice(1, screen.innerText.length)
    }
})
