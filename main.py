sensorGas = 0
humedad = -999
temperatura = -999
errorMsj = "Error"
basicPause = 5000
configTries = 10
nerworkName = "arrakis"
networkPassword = "thespicemustflow"
serverURL = "http://192.168.88.53:8000/muestra/"
configTimeout = custom.setup_esp(nerworkName, networkPassword, serverURL)
basic.pause(basicPause)
basic.clear_screen()

def on_forever():
    if configTimeout < configTries:
        dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P2, True, False, True)
        basic.pause(basicPause)
        temperatura2 = dht11_dht22.read_data(dataType.TEMPERATURE)
        if temperatura2 != -999:
            custom.send_data("Casita", "Temperatura", "" + str(temperatura2))
        basic.pause(basicPause)
        humedad2 = dht11_dht22.read_data(dataType.HUMIDITY)
        if humedad2 != -999:
            custom.send_data("Casita", "Humedad", "" + str(humedad2))
        basic.pause(basicPause)
        if pins.digital_read_pin(DigitalPin.P4) == 0:
            custom.send_data("Casita", "Gas", "Gas detectado")
        else:
            custom.send_data("Casita", "Gas", "Gas no detectado")
    else:
        serial.write_string(errorMsj)
        basic.show_string(errorMsj)
        basic.pause(basicPause)
basic.forever(on_forever)
