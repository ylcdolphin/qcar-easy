let start = 0
IR.IR_callbackUser(function (message) {
    if (message == 1) {
        start = 1
    } else {
        start = 0
    }
})
function trail () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
}
basic.forever(function () {
    if (start == 1) {
        trail()
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
