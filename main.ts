input.onButtonPressed(Button.A, function () {
    led.unplot(col, Led)
    Led += -1
    col += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(col, Led)
    Led += 1
    col += 1
})
let col = 0
let Led = 0
Led = 0
let del = 0
col = 0
basic.forever(function () {
    if (Led == 4) {
        del += 1
    }
    if (del == 1) {
        Led += -1
        led.plot(col, Led)
        basic.pause(1000)
        led.unplot(col, Led)
    } else {
        Led += 1
        led.plot(col, Led)
        basic.pause(1000)
        led.unplot(col, Led)
    }
    if (Led == 0) {
        del += -1
    }
    if (col > 4) {
        col = 0
    }
    if (col < 0) {
        col = 4
    }
})
