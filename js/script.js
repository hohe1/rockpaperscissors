// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/

$(document).ready(function(){
//GLOBAL VARIABLES

var wins = 0;
var lose = 0;
var tie = 0;


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("#dropdown").val());
    //$("#computerChoice").text($("#input").val());
    CoutPut2();
    
    //display score------------
    $("#score").text("your score = "+"win: "+wins+" tie: "+tie+" lose: "+lose)
    
    scoring();

    
    
    

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
            break;
            
        case 2:
            $("#computerChoice").text("paper");
            break;
            
        case 3:
            $("#computerChoice").text("rock");
            break;
        default:
        return ";-;";
    }
    
}

//score

function scoring(){
    var uc=$("#userChoice").text;
    var cc=$("#computerChoice").text;


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

    
    
    
});