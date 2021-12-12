'use strict';
/*
//TEXT CONTENT
//cambiare il contenuto testuale di un elemento

document.querySelector('.message').textContent = 'Prova a indovinare';
document.querySelector('.number').textContent = 6;
document.querySelector('.highscore').textContent = 32;

//VALUE
//prendere un valore inserito in un input

document.querySelector('.guess').value = 12; //assegni valore all'input
console.log(document.querySelector('.guess').value); //stampi valore input
*/

//GUESS MY NUMBER gioco
//Devi inserire un numero nell'input, il quale deve essere comparato con il numero segreto
//Il numero inserito in input è una stringa e quindi va convertito in numero per la comparazione

//EVENT LISTENER

//Inserisci un valore nell'input che viene stampato al click del bottone
//selezioni bottone--metodo addEventListener ("azione" , function (){reazione che accade al click})
//reazione: seleziona il valore dell'input e lo stampa a console

//il numero segreto va definito fuori dall handler function--> va definito una volta sola
//se definissimo il numero segreto nella funzione cambierebbe a ogni click

//numero random senza decimali da 1 a 20 che cambia ogni volta
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//score parte da 20 e deve diminuire di uno in caso di errore
//se score arriva a 0 hai perso
let score = 20;
let highscore = 0; //qualunque nuovo valore sarà >0 e quindi il nuovo highscore

//REFACTORING CODE creare funzioni per sostituire il codice che si ripete più volte
//document.querySelector('.message').textContent---> si ripete 5 volte
let displayMessaggio = message =>
  (document.querySelector('.message').textContent = message);

//BOTTONE CHECK
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //scenario no imput: nessun numero inserito-->
  //zero è fasly, ma la condizione deve essere vera, quindi si inverte il risultato-- ! not
  if (!guess) {
    displayMessaggio('Inserisci un numero diverso da 0');

    //scenario numero uguale a numero segreto-->indovina numero segreto
  } else if (guess === secretNumber) {
    displayMessaggio('Bravo, hai indovinato');
    //mostra il numero vincente
    document.querySelector('.number').textContent = secretNumber;
    //cambia stile schermata in caso di vincita
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //nuovo highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //se numero non è = a numero segreto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessaggio(
        guess > secretNumber ? 'Numero troppo alto' : 'Numero troppo basso'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessaggio('Hai perso!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//BOTTONE AGAIN
document.querySelector('.again').addEventListener('click', function () {
  //assegna un nuovo numero segreto
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = ' ';
  displayMessaggio('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});

/* versione estesa

//scenario numero troppo alto
  else if (guess > secretNumber) {
    //se score va sotto 1 perdi il gioco
    if (score > 1) {
      document.querySelector('.message').textContent = 'Numero troppo alto';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Hai perso!';
    }

    //scenario numero troppo alto
  } else {
    if (score > 1) {
      //se score va sotto 1 perdi il gioco
      document.querySelector('.message').textContent = 'Numero troppo basso';
      (score -= 1), (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = 'Hai perso!';
    }
  }


*/
