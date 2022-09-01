input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    basic.showString("CONGRATS")
})
