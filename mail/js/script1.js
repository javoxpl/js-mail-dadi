/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)*/

/*test
const test = "hello world";

console.log(test);
*/


function findMail(mail, mailGiuste) {
    let mailFound = "mail errata";
    for (let i = 0; i < mailGiuste.length; i++) {
        if (mailGiuste[i] === mail) {
            mailFound = "mail corretta";
        }
    }
    console.log (mailFound);
}

let mail = prompt("inserisci la mail");
const mailConsentite = ["lorenzo.iacovone@gmail.com", "iacovone.lorenzo@outlook.it", "liacovone@hotmail.it"];
findMail(mail, mailConsentite);



