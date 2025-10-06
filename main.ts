input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        # # . . .
        . # . # .
        . . . . .
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
