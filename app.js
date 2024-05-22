const rollBtn = document.getElementById('rollBtn');
const counter = document.getElementById('counter');


rollBtn.onclick = function(){
    const randNumber = Math.floor(Math.random() * 100)
    counter.textContent = randNumber;
}
