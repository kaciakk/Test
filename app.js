
function calculate(){
   const input1 = document.getElementById('input1');
   const input2 = document.getElementById('input2');
   const input3 = document.getElementById('input3');
   const p1 = document.getElementById('p1');

   let principalAmount = input1.value;
   let interestRate = input2.value;
   let years = input3.value;
   

   if(principalAmount < 0 ){
     principalAmount = 0;
   }
   if(interestRate < 0 ){
      interestRate = 0;
    }
    if(years < 0 ){
      years = 0;
    }
    const result = principalAmount * Math.pow((1 + interestRate / 1), 1*years);
   p1.textContent = result.toLocaleString('pl-PL', {
      style:'currency',
      currency:'PLN'
    });
}