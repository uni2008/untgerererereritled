let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    basic.showNumber(DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2))
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (distantzia > 50) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (distantzia > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
    } else if (distantzia > 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (distantzia > 5) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
