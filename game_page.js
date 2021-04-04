player1 = localStorage.getItem("Player #1");
player2 = localStorage.getItem("Player #2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2;


function Send() {
    number1 = document.getElementById("#1").value;
    number2 = document.getElementById("#2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);

    questionNumber = "<h4>" + "What is " + number1 + " X " + number2 + "?" + "</h4>";
    inputBox = "<br>Answer: <input type='number' id='inputCheckBox'>";
    checkButton = "<br><br> <button class='button' onclick='check();'>Check</button>";
    row = questionNumber + inputBox + checkButton;

    document.getElementById("output").innerHTML = row;

    document.getElementById("#1").value = "";
    document.getElementById("#2").value = "";
}

questionTurn = "Player 1";
answerTurn = "Player 2";

function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    if (getAnswer == actualAnswer) {

        if (answerTurn == "Player 1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        } else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    if (questionTurn == "Player 1") {
        questionTurn = "Player 2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2;
    } else {
        questionTurn = "Player 1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1;
    }

    if (answerTurn == "Player 1") {
        answerTurn = "Player 2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2;
    } else {
        answerTurn = "Player 1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1;
    }

    document.getElementById("output").innerHTML = "";
}