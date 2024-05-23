const input1 = document.getElementById('input1');
const button1 = document.getElementById('button1');
const label1 = document.getElementById('label1');
let age;

button1.onclick = function() {
    age = input1.value;
    age = Number(age)
if (age >= 0 && age <= 17) {
    label1.textContent = `Masz za mało lat = ${age}`
} else if (age >= 18 && age <=24){
    label1.textContent = `Możesz przejść = ${age}`
} else if (age >= 25) {
    label1.textContent = `Jesesś za stary = ${age}`
} else {
    label1.textContent = `Wprowadz wiek`
}
}