basicPause = 5000
configTries = 10
serial.redirect_to_usb()
basic.clear_screen()

def on_forever():
    serial.write_value("x", pins.digital_read_pin(DigitalPin.P13))
    basic.pause(basicPause)
basic.forever(on_forever)