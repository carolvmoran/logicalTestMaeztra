// funcao que recebe um array de inteiros
function repeat(array) {
  let repeatNumber = []; // array para receber numeros que se repetem
  let numbers = new Set(); // recebe os numeros
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (numbers.has(element)) {
      // verifica se element existe em numbers
      if (repeatNumber.includes(element)) {
        // se element existe em numbers e também em repeatNumber nada ocorre, pois o numero já se repetiu
        repeatNumber;
      } else {
        // se element existe em numbers, mas náo em repeatNumbers, faz o push para o array, pois o numero se repetiu nesse momento
        repeatNumber.push(element);
      }
    }
    numbers.add(element); // recebe element
  }
  return repeatNumber; // array qeu retorna somente os numeors que se repetiram
}
