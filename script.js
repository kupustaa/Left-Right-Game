var startGame = function(){
 
var userChoice = prompt("'left' or 'right'.");

var choiceLock = function(y){
if(y !== "right" && y !== "left"){
        if(y === null){
    alert("Come back soon!");
    }
         else{     
         confirm(y + " is an invalid entry.");
	 startGame();
    }
    }

else {
	compare(userChoice,computerChoice);
}
};

var computerChoice = Math.random();
    if (computerChoice < 0.50){
        computerChoice = "left";
    }
    else {
        computerChoice = "right";
    }

var compare = function(choice1,choice2){
    if (choice1 === choice2){
       if (confirm("You died. Try again?")){
		   startGame();
	   }
	   else {
		   alert("Thanks for playing!");
	   }
    }
    else {
        
        if(confirm("You survived...")){
        startGame();
        }
        else{
            alert("You did well!");
        }
    }
};

choiceLock(userChoice);
};
