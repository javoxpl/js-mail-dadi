/*Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?*/

/*const test = "hello world";

console.log(test);*/


const Pc = "Avversario1";

console.log(Pc);

//genriamo 10 numeri random da 1 a 6 e inseriamoli in un array per il primo avversario
let numeriPc =[]; 
let numero;
for (let i = 0; i < 10; i++) {
     numero = Math.round(Math.random() * 5)+1;
    numeriPc.push(numero);
    
}
console.log(numeriPc);

//sommiamo tutti i numeri all'interno dell'array del primo avversario
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < numeriPc.length; i++) {
    sum += numeriPc[i];
}
console.log("somma 1 =" + " " + sum);




const PcDue = "Avversario2";

console.log(PcDue);

//genriamo 10 numeri random da 1 a 6 e inseriamoli in un array per il secondo avversario
let numeriPcDue =[]; 
let numeroDue;
for (let i = 0; i < 10; i++) {
     numeroDue = Math.round(Math.random() * 5)+1;
    numeriPcDue.push(numeroDue);
    
}
console.log(numeriPcDue);


//sommiamo tutti i numeri all'interno dell'array del secondo avversario
let sum2 = 0;

for (let i = 0; i < numeriPcDue.length; i++) {
    sum2 = sum2 + numeriPcDue[i];
}
console.log("somma 2 =" + " " + sum2);


if (sum>sum2) {
    console.log("vince avversario uno");
} else if (sum<sum2) {
    console.log("vince avversaio due");
}  else {
    console.log("pareggio");
}