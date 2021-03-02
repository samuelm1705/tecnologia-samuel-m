input.onButtonPressed(Button.A, function () {
    basic.showString("¡Bienvenido!")
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() > 120) {
        basic.showString("L optima")
    } else {
        basic.showString("L anormal ")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 15) {
        basic.showString("T optima")
    } else {
        basic.showString("T anormal")
    }
})
