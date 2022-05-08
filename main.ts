radio.onReceivedNumber(function (receivedNumber) {
    prijmuty_symbol = receivedNumber
    je_konec_hry()
})
function nova_hra () {
    _symbol = 0
    prijmuty_symbol = 0
    je_odeslano = 0
    basic.showString("S")
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (je_odeslano != 1) {
        _symbol += 1
    }
    if (_symbol > 3) {
        _symbol = 1
    }
    zobraz_symbol(_symbol)
    basic.pause(100)
    basic.clearScreen()
})
function zobraz_symbol (sym: number) {
    if (sym == 1) {
        basic.showIcon(IconNames.Square)
    } else if (sym == 2) {
        basic.showIcon(IconNames.Diamond)
    } else if (sym == 3) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
}
input.onButtonPressed(Button.AB, function () {
    nova_hra()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(_symbol)
    je_odeslano = 1
    zobraz_symbol(_symbol)
    je_konec_hry()
})
function je_konec_hry () {
    if (je_odeslano == 1 && prijmuty_symbol > 0) {
        zobraz_symbol(_symbol)
        basic.pause(100)
        basic.clearScreen()
        zobraz_symbol(prijmuty_symbol)
        basic.pause(100)
        basic.clearScreen()
        if (_symbol == prijmuty_symbol) {
            basic.showString("?")
        } else if (_symbol == 1 && prijmuty_symbol == 2) {
            basic.showIcon(IconNames.Yes)
        } else if (_symbol == 2 && prijmuty_symbol == 3) {
            basic.showIcon(IconNames.Yes)
        } else if (_symbol == 3 && prijmuty_symbol == 1) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
}
let je_odeslano = 0
let _symbol = 0
let prijmuty_symbol = 0
radio.setGroup(148)
nova_hra()
