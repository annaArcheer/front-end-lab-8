var playAgain = true;   
while(playAgain){
    var start = confirm("Do you want to play a game ?");
    if (start){
        var count = 3;
        var totalPrize = 0;
        var prizes = [10, 5, 3];
        var min = 0;
        var max = 5;
        var allTotalPrize = 0;
        var random = Math.floor(Math.random() * (max - min + 1) ) + min;
        
           //цикл count
        for (i=0; i<count; i++){
            var number = Number(prompt("Please enter a number from " + min + " to " + max + "\n" 
                                 + "Attemts left: " + (count - i) + "\n" + "Total prize: " +
                                 totalPrize + "$ \n" + "Possible prize on current attempt: " +
                                 prizes[i] + "$", 0));

                if (number == random){
                    totalPrize =+ prizes[i]; 
                }     
            allTotalPrize += totalPrize;
            console.log("Thank you for a game. Your prize is: "+totalPrize+" $");
        }      
    }
    
    if (number == random){
            var continueGame = confirm("Do you want to continue the game?");
            if (continueGame){
                max = max + max;
                console.log(max);
                for (j=0; j < prizes.length; j++){
                    prizes[j] *= 3;
                    if (number == random){
                    totalPrize =+ prizes[j]; 
                    }   
                }  
            }
        }
    
    console.log("Thank you for a game. Your prize is: "+allTotalPrize+" $");
    
    var playAgain = confirm("Do you want play again");
    if(playAgain==false || start==false){
        console.log("You did not become a millionaire");
    }
}
