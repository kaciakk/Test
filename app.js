function rollDice() {
    const input1 = document.getElementById('input1').value;
    const result = document.getElementById('result');
    const resultImg = document.getElementById('result-img');
    const dicesRoll = [];
    const dicesImage = [];

   for ( let i = 0; i < input1; i++){
      const randNumbers = Math.floor(Math.random() * 6) +1; 
      dicesRoll.push(randNumbers);
      dicesImage.push(`<img src="images/${randNumbers}.png" alt="Dice ${randNumbers}"}>`);
      
   }
   result.textContent = dicesRoll.join(', ');
   resultImg.innerHTML = dicesImage.join(' ');
}

rollDice();