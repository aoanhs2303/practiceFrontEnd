function populate() {
    if (quiz.isEnded()) {
        showScore();
    } else {
        //show question
        var element = document.querySelector(".question");
        element.textContent = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var el = document.querySelector('#choice' + i);
            el.textContent = choices[i];
            guess("btn" + i, choices[i]);
            
        }
    }
    showProgress();
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScore() {
    var gameOVerHTML = "<h1> Result </h1>";
    gameOVerHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    document.querySelector(".quiz").innerHTML = gameOVerHTML;
    
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.textContent = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


var questions = [
 new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
 new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
 new Question("There are __ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
 new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
 new Question("MVC is a ___.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();
