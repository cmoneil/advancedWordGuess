var Word = require("./word");
var inquirer = require('inquirer');
var wordArray = ["dog", "cat", "rabbit"]

function pickWord() {
    var randomWordNum = Math.floor(Math.random() * wordArray.length);
    var randomWord = wordArray[randomWordNum];
    var randomWordObject = new Word(randomWord);
    console.log(randomWord);
}

pickWord()

inquirer
    .prompt([
        {
        type: "input",
        message: "What is your guess?",
        name: "guess"
        }
    ])
    .then(function(inquirerResponse){
        console.log(inquirerResponse.name);
    })
