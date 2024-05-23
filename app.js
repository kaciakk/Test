const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const button1 = document.getElementById('button1');


button1.onclick = function(){
    if(input1.checked){
        p1.textContent = `You are subscribed`
    } else {
        p1.textContent = `You are not subscribed`
    }
    if(input2.checked){
        p2.textContent = `You are paying with Blik`
    } else if (input3.checked) {
        p2.textContent = `You are paying with Paypal`
    } else if (input4.checked){
        p2.textContent = `You are paying with Visa`
    } else {
        p2.textContent = `Pick payement method`
    }
}



