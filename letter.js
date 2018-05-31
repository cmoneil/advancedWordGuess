var characterArray =[]
var userGuess = "a";
var Letter = function (character, letterGuess) {
    this.character = character,
    this.letterGuess = true,
    this.checkGuess = function() {
        if (this.character === userGuess) {
            this.letterGuess = true;
            
        }
        else {this.letterGuess = false};
        console.log(this.letterGuess)
    }
    this.toString = function() {
        if (this.letterGuess===true) {
            console.log(this.character)
        }
        else (console.log("_"))
    }   
    
}

module.exports = Letter()

var a = new Letter("a");
var b = new Letter("b")

a.checkGuess();
b.checkGuess();
a.toString();
b.toString();


