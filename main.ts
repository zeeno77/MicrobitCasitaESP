let sensorGas = 0
let humedad = -999
let temperatura = -999
let errorMsj = "Error"
let basicPause = 5000
let configTries = 10
let nerworkName = "arrakis"
let networkPassword = "thespicemustflow"
let serverURL = "http://192.168.88.53:8000/muestra/"
let configTimeout = custom.setupESP(nerworkName, networkPassword, serverURL)
basic.pause(basicPause)
basic.clearScreen()
basic.forever(function on_forever() {
    let temperatura: number;
    let humedad: number;
    if (configTimeout < configTries) {
        dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P2, true, false, true)
        basic.pause(basicPause)
        temperatura = dht11_dht22.readData(dataType.temperature)
        if (temperatura != -999) {
            custom.sendData("Casita", "Temperatura", "" + ("" + temperatura))
        }
        
        basic.pause(basicPause)
        humedad = dht11_dht22.readData(dataType.humidity)
        if (humedad != -999) {
            custom.sendData("Casita", "Humedad", "" + ("" + humedad))
        }
        
        basic.pause(basicPause)
        if (pins.digitalReadPin(DigitalPin.P3) == 0) {
            custom.sendData("Casita", "Gas", "Gas detectado")
        }
        
        basic.pause(basicPause)
    } else {
        // custom.send_data("Casita", "Agua", )
        serial.writeString(errorMsj)
        basic.showString(errorMsj)
        basic.pause(basicPause)
    }
    
})
