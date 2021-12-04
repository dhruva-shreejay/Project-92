var player1score = 0;
var player2score = 0;

player1_name = localStorage.getItem("player1_name");
console.log("Player1 : " + player1_name);
player2_name = localStorage.getItem("player2_name")
console.log("Player2 : " + player2_name);

document.getElementById("player1_n").innerHTML = player1_name + ": " + player1score;
document.getElementById("player2_n").innerHTML = player2_name + ": " + player2score; 

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check();'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    //document.getElementById("number1").value = 0;
    //document.getElementById("number2").value = 0;
}

function check()
{
    h3_1 = "<h3>Number 1</h3><br></br>";
    input_1 = "<input id = 'number1' placeholder = 'Number 1'><br></br>";
    h3_2 = "<h3>Number 2</h3><br></br>";
    input_2 = "<input id = 'number2' placeholder = 'Number 2'><br></br>";
    send_button = "<button id = 'send' onclick = 'send();'>Send</button><br></br>";
    document.getElementById("output2").innerHTML = h3_1 + input_1 + h3_2 + input_2 + send_button; 




    question_turn = "player1_turn";
    answer_turn = "player2_turn";

    get_answer = document.getElementById("input_check_box").value;
    
    console.log("Number 1 : " + number1);
    console.log("Number 2 : " + number2);



    if(get_answer == actual_answer && answer_turn == "player1_turn")
    {
        player1score++;
        document.getElementById("player1_n").innerHTML = player1_name + ": " + player1score;
    }
    else
    {
        document.getElementById("player1_n").innerHTML = player1_name + ": " + player1score;
    }
    
    if(get_answer == actual_answer && answer_turn == "player2_turn")
    { 
        player2score++;
        document.getElementById("player2_n").innerHTML = player2_name + ": " + player2score;
        question_turn = "player1_turn";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    else
    {
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
        document.getElementById("player2_n").innerHTML = player2_name + ": " + player2score;
        question_turn = "player2_turn";
    }
}



