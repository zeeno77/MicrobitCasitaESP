let sensorGas = 0
let temperatura = 0
let humedad = 0
let errorMsj = "Error"
let basicPause = 5000
let configTries = 10
let nerworkName = "arrakis"
let networkPassword = "thespicemustflow"
let serverURL = "http://192.168.88.53:8000/muestra/"
let configTimeout = custom.setupESP(nerworkName, networkPassword, serverURL)
basic.pause(basicPause)
basic.clearScreen()
basic.forever(function () {
    // }
    if (configTimeout < configTries) {
        // dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P2, True, False, True)
        // basic.pause(basicPause)
        // temperatura = dht11_dht22.read_data(dataType.TEMPERATURE)
        // # if (temperatura != -999) {
        // custom.send_data("Casita", "Temperatura", "" + str(temperatura))
        // # }
        // basic.pause(basicPause)
        // humedad = dht11_dht22.read_data(dataType.HUMIDITY)
        // # if (humedad != -999) {
        // custom.send_data("Casita", "Humedad", "" + str(humedad))
        // # }
        basic.pause(basicPause)
        sensorGas = pins.digitalReadPin(DigitalPin.P3)
        if (sensorGas == 1) {
            // if (humedad != -999) {
            custom.sendData("Casita", "Gas", "Gas detectado")
        } else {
            // if (humedad != -999) {
            custom.sendData("Casita", "Gas", "Gas no detectado")
        }
    } else {
        serial.writeString(errorMsj)
        basic.showString(errorMsj)
        basic.pause(basicPause)
    }
})
