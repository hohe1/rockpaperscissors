// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/

$(document).ready(function(){
//GLOBAL VARIABLES

var wins = 0;
var lose = 0;
var tie = 0;

var uc;
var cc;



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("#dropdown").val());
    uc = $("#dropdown").val();
    CoutPut2();
    scoring();
    //display score------------
    $("#score").text("your score = "+"win: "+wins+" tie: "+tie+" lose: "+lose)
    gameOver();
});

$(document).keydown(function(e){
    console.log(e.key);
    if(e.key ==="."){
        
    $("#userChoice").text($("#dropdown").val());
    uc = $("#dropdown").val();
    CoutPut2();
    scoring();
    //display score------------
    $("#score").text("your score = "+"win: "+wins+" tie: "+tie+" lose: "+lose)
    gameOver();
    }
});

$("#question").click(function(){
    alert(". to shoot\n");
    
});




//generate computer out put

function RNG(x,y){
    return Math.floor(Math.random()*(x - y) + y);
}

function CoutPut2(){
    var number = RNG(1,4);
    console.log(number);
    
    switch (number){
        case 1:
            $("#computerChoice").text("scissors");
            cc = "scissors";
            break;
            
        case 2:
            $("#computerChoice").text("paper");
            cc = "paper";
            break;
            
        case 3:
            $("#computerChoice").text("rock");
            cc = "rock";
            break;
        default:
        return ";-;";
    }
}

//score

function scoring(){
switch (cc){
    
    case "scissors":
        if(uc === "scissors"){
            tie++;
        }else if(uc === "rock"){
            lose++;
        }else{
          wins++;  
        }
    break;
    
    case "rock":
        if(uc === "rock"){
            tie++;
        }else if(uc === "paper"){
            lose++;
        }else{
          wins++;  
        }
    break;
    
    case "paper":
        if(uc === "paper"){
            tie++;
        }else if(uc === "scissors"){
            lose++;
        }else{
          wins++;
        }
    break;
    
    default:
        
    }
}

function  gameOver(){
    if(wins -5 === lose){
        reset();
        alert("you win.");
    }else if(wins +5 === lose){
        reset();
        alert("you lost.");
    }
}    

function reset(){
    tie = 0;
    wins = 0;
    lose= 0;
    $("#computerChoice").text("");
    $("#playerChoice").text("");
    $("#score").text("your score = "+"win: "+wins+" tie: "+tie+" lose: "+lose)

}
});
