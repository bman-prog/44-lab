let message = ""
game.splash("")
let names = [
"bob",
"john",
"marley",
"eugene",
"cassius",
"junior",
"victor",
"kenny",
"max",
"leo"
]
let nameToFind = game.askForString("What is the name you would like to find?")
for (let value of names) {
    if (value == nameToFind) {
        message = "You found the name!"
        break;
    } else {
        message = "You did not find the name!"
    }
}
game.splash(message)
