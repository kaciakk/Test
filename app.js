const decBtn = document.getElementById('decBtn');
const reset = document.getElementById('reset');
const incBtn = document.getElementById('incBtn');
const counter = document.getElementById('counter');
let count = 0;

decBtn.onclick = function(){
    count++;
    counter.textContent = count;
}
incBtn.onclick = function(){
    count--;
    counter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}