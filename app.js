
   function getComputerChoice(){
      let randNum = Math.random();
      if(randNum <= 0.33333333){
         return "kamien";
      } else if(randNum > 0.333334 && randNum <= 0.666666){
         return "papier";
      } else {
         return "nozyce";
      }
   }
   
   function getHumanChoice(){
      let sign = prompt("What's your sign?")
      if(sign.toLowerCase() === 'kamien'){
         console.log("wybrałes Kamien");
         return "kamien";
      } else if(sign.toLowerCase() === "papier"){
         console.log("wybrałes papier")
         return "papier";
      } else if(sign.toLowerCase() === "nozyce"){
         console.log("wybrałes nozyce")
         return "nozyce";
      }
   }
   


 
function playGame(){
   let humanScore = 0;
   let computerScore = 0;
   
   function playRound(humanChoice, computerChoice) {
      humanChoice = getHumanChoice();
      computerChoice = getComputerChoice();
      if(humanChoice === computerChoice){
         console.log("remis")
      }else if (humanChoice === "kamien" && computerChoice === "papier"){
         console.log("kamień przegrywa z papierem. komputer wygrywa")
         computerScore++
      }else if (humanChoice === "kamien" && computerChoice === "nozyce"){
         console.log("kamień wygrywa z nozyce. uzytkownik wygrywa")
         humanScore++
    }else if (humanChoice === "papier" && computerChoice === "nozyce"){
      console.log("papier przegrywa z nozyce. uzytkownik przegrywa")
      computerScore++
   }else if (humanChoice === "papier" && computerChoice === "kamien"){
      console.log("papier wyrgywa z kamien. uzytkownik wygrywa")
       humanScore++
   }else if (humanChoice === "nozyce" && computerChoice === "kamien"){
      console.log("nozyce przegrywa z kamien. uzytkownik przgrywa")
      computerScore++
   }else if (humanChoice === "nozyce" && computerChoice === "papier"){
      console.log("papier wyrgywa z kamien. uzytkownik wygrywa")
       humanScore++
   }
   
   }

   for (let i=1; i<6; i++) {
      playRound();
      console.log(humanScore);
      console.log(computerScore);
      }
   
  
}
playGame();