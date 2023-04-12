sensorGas = 0
temperatura = 0
humedad = 0
errorMsj = "Error"
basicPause = 5000
configTries = 10
nerworkName = "arrakis"
networkPassword = "thespicemustflow"
serverURL = "http://192.168.88.53:8000/muestra/"
#configTimeout = custom.setup_esp(nerworkName, networkPassword, serverURL)
basic.pause(basicPause)
basic.clear_screen()

def on_forever():
#    global sensorGas
#    if configTimeout < configTries:
#        # dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P2, True, False, True)
#        # basic.pause(basicPause)
#        # temperatura = dht11_dht22.read_data(dataType.TEMPERATURE)
#        # if (temperatura != -999) 
#        # custom.send_data("Casita", "Temperatura", "" + str(temperatura))
#        # basic.pause(basicPause)
#        # humedad = dht11_dht22.read_data(dataType.HUMIDITY)
#        # if (humedad != -999) 
#        # custom.send_data("Casita", "Humedad", "" + str(humedad))
#        basic.pause(basicPause)
#        sensorGas = pins.digital_read_pin(DigitalPin.P3)
#        if sensorGas == 1:
#            custom.send_data("Casita", "Gas", "Gas detectado")
#        else:
#            custom.send_data("Casita", "Gas", "Gas no detectado")
#        
#    else:
#        serial.write_string(errorMsj)
#        basic.show_string(errorMsj)
#        basic.pause(basicPause)
#    basic.pause(basicPause)
    serial.write_string("" + str((pins.analog_read_pin(AnalogPin.P10))))    
basic.forever(on_forever)
