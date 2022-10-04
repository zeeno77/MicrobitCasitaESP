let humedad = 0
let temperatura = 0
let errorMsj = "Error"
let basicPause = 3000
let configTries = 10
let nerworkName = "arrakis"
let networkPassword = "thespicemustflow"
let serverURL = "http://192.168.88.53:8000/muestra/"
let configTimeout = custom.setupESP(nerworkName, networkPassword, serverURL)
basic.pause(basicPause)
basic.clearScreen()
basic.forever(function () {
    if (configTimeout < configTries) {
        dht11_dht22.queryData(
        DHTtype.DHT11,
        DigitalPin.P2,
        true,
        false,
        true
        )
        basic.pause(basicPause)
        temperatura = dht11_dht22.readData(dataType.temperature)
        custom.sendData("Casita", "Temperatura", temperatura.toString())
        basic.pause(basicPause)
        humedad = dht11_dht22.readData(dataType.humidity)
        custom.sendData("Casita", "Humedad", humedad.toString())
    } else {
        serial.writeString(errorMsj)
        basic.showString(errorMsj)
        basic.pause(basicPause)
    }
})
