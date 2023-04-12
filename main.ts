let basicPause = 5000
let configTries = 10
serial.redirectToUSB()
basic.clearScreen()
basic.forever(function on_forever() {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P13))
    basic.pause(basicPause)
})
