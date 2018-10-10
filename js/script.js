// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/

$(document).ready(function(){
//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("#dropdown").val());
    //$("#computerChoice").text($("#input").val());
    

});

//generate computer out put

function COutPut(x,y){
    return Math.floor(Math.random()*(x - y) + y);
}

function CoutPut2(){
    var number = COutPut(1,3);
    
    switch (number){
        case 1:
            return "scissors";
            break;
            
        case 2:
            return "paper";
            break;
            
        case 3:
            return "rock";
            break;
        default:
        return ";-;";
    }
    
}



});