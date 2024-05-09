/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
console.log(area(5, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1, num2 = 19) {
  if (num1 > num2) {
    const diffAbs3 = Math.abs((num1 - num2) * 3);
    return diffAbs3;
  } else {
    const diffAbs = Math.abs(num1 - num2);
    return diffAbs;
  }
}
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(numInt) {
  if (numInt > 20 && numInt <= 100) {
    return true;
  } else if (numInt === 400) {
    return true;
  } else {
    return false;
  }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
stringa1 = "ciao";
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    const nuovaStringa = "EPICODE " + stringa;
    return nuovaStringa;
  }
}
console.log(epify(stringa1));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numInt) {
  return numInt % (3 || 7) === 0;
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
  const splitString = stringa.split("");
  const reverseSplitString = splitString.reverse();
  const joinString = reverseSplitString.join();
  return joinString;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  let splitStringa = stringa.split(" ");
  let finale = [];
  for (let index = 0; index < splitStringa.length; index++) {
    const primaLettera = splitStringa[index][0].toUpperCase();
    const testoRestante = splitStringa[index].slice(1);
    /*  console.log(testoRestante);
    console.log(primaLettera); */
    let x = primaLettera + testoRestante;
    finale.push(x);
  }
  console.log(finale.join(" "));
}
upperFirst("forza milan");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa) {
  const stringArray = stringa.slice(1, -1);

  return stringArray;
}
console.log(cutString("ciao a tutti"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
