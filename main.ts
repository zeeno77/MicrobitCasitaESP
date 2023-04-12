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
    let temperatura2: number;
    let humedad2: number;
    if (configTimeout < configTries) {
        dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P2, true, false, true)
        basic.pause(basicPause)
        temperatura2 = dht11_dht22.readData(dataType.temperature)
        if (temperatura2 != -999) {
            custom.sendData("Casita", "Temperatura", "" + ("" + temperatura2))
        }
        
        basic.pause(basicPause)
        humedad2 = dht11_dht22.readData(dataType.humidity)
        if (humedad2 != -999) {
            custom.sendData("Casita", "Humedad", "" + ("" + humedad2))
        }
        
        basic.pause(basicPause)
        if (pins.digitalReadPin(DigitalPin.P4) == 0) {
            custom.sendData("Casita", "Gas", "Gas detectado")
        } else {
            custom.sendData("Casita", "Gas", "Gas no detectado")
        }
        
    } else {
        serial.writeString(errorMsj)
        basic.showString(errorMsj)
        basic.pause(basicPause)
    }
    
})
