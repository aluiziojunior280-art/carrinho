radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        esquerda()
    }
    if (receivedNumber == 2) {
        direita()
    }
    if (receivedNumber == 3) {
        frente()
    }
    if (receivedNumber == 4) {
        parar()
    }
})
function tras () {
    robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CCW, 255)
    robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CCW, 255)
}
function esquerda () {
    robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CCW, 255)
    robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CW, 255)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
function direita () {
    robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CW, 255)
    robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CCW, 255)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
function frente () {
    robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CW, 255)
    robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CW, 255)
}
function parar () {
    robotics.motorStop(robotics.MotorType.M1)
    robotics.motorStop(robotics.MotorType.M2)
}
radio.setGroup(222)
