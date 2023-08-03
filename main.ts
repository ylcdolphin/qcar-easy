let 開始 = 0
function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}
IR.IR_callbackUser(function (message) {
    if (message == 1) {
        開始 = 1
    } else {
        開始 = 0
    }
})
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
}
function 停車 () {
    maqueen.motorStop(maqueen.Motors.All)
}
function 前進 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
function 循跡 () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        右轉()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        左轉()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        後退()
    } else {
        前進()
    }
}
basic.forever(function () {
    if (開始 == 1) {
        循跡()
    } else {
        停車()
    }
})
