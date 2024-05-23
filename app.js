const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const result = document.getElementById("result");
const button1 = document.getElementById("button1");

button1.onclick = function() {
    
    calculate();
    console.log(calculate());
    }

    function calculate() {
      
        if(input2.checked){
            result.textContent = (input1.value * 1.8) + 32;
        } else if (input3.checked){
            result.textContent = (input1.value - 32) * 1.8;
        } else 
            result.textContent = `WYBIERZ JEDNSOTKE`
    }

    console.log(typeof(result))

