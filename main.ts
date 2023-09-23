input.onButtonPressed(Button.A, function () {
    basic.showNumber(licznik)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (kalibracja) {
        licznikKalibracji += 10
    } else {
        licznik = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (kalibracja) {
        kalibracja = false
        krok = licznikKalibracji / 100
        licznik = 0
    } else {
        kalibracja = true
        licznikKalibracji = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(licznik * krok * 2)
})
input.onGesture(Gesture.Shake, function () {
    if (!(kalibracja)) {
        licznik += 1
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
let licznikKalibracji = 0
let kalibracja = false
let krok = 0
let licznik = 0
licznik = 0
krok = 0.5
kalibracja = false
