var Letter = require("./letter")


var Word = function(word) {
    this.randomWordObject = word.split("");
    var lettersArray;
    this.makeLetters = function(){
        for(i=0; i<this.wordArray.length; i++){
            var newLetter = new Letter(this.wordArray[i]);
            lettersArray.push(newLetter);
        }
    console.log(this.wordArray);
    console.log(lettersArray);
    }

}
