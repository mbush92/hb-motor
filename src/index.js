import {
  pinMode,
  OUTPUT,
  HIGH,
  LOW,
  digitalWrite,

} from 'bone-script'


let step = "P8_43"
let dir = "P8_44"

pinMode(step, OUTPUT)
pinMode(dir, OUTPUT)

digitalWrite(step, HIGH)
