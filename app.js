function generatePassword(){
   //pobieranie id 
   const input1 = document.getElementById('input1');
   const input2 = document.getElementById('input2');
   const input3 = document.getElementById('input3');
   const input4 = document.getElementById('input4');
   const input5 = document.getElementById('input5').value;
   const p1 = document.getElementById('p1');   
   //przypisanie wartosci do generowania hasla
   const small = "qwertyuiopoasdfghjklzxcvbnnm"
   const large = "QWERTYUIOPASDFGHJKLZXCVBNM";
   const symbol = "!@#$%^&*()_+-=";
   const number = "1234567890";
   //przypisanie aktywnosci wartosci hasla
   const isSmall = input1.checked;
   const isLarge = input2.checked;
   const isSymbol = input3.checked;
   const isNumber = input4.checked;
   const passwordLength = input5;
   let allowCharacters = "";
   let password = "";
   allowCharacters += isSmall ? small : "";
   allowCharacters += isLarge ? large : "";
   allowCharacters += isSymbol ? symbol : "";
   allowCharacters += isNumber ? number : "";
//tutaj petla dziala dopoki passwrodLength jest wieksze od i, potem randIndex generuje znaki na podstawie dlugosci allowCharacters 
//i potem randomindex dodaje losowy znak do password
   for (let i = 0; i < passwordLength ; i++){
      const randomIndex = Math.floor(Math.random() * allowCharacters.length);
      password += allowCharacters[randomIndex];
      p1.textContent = password;
   } 

}
