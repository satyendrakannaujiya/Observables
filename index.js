import { Observable } from "./observable.js";

const values = [1, 2, 3, 4, 5, 6, 7];

const observable = new Observable(values, 2000);
observable.subscribe(value => {
    console.log('value received : ' + value);
}, _ => {
    console.log('completed...');
}).emit();

// values.forEach((value)=>{
// 	console.log(value);
// });

//////////// button code ///////////
let number = 100;

function addValue() {
    observable.push(number++);
    // values.push(number++);
}

const btn = document.querySelector('#addBtn');
btn.addEventListener('click', addValue);

