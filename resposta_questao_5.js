// funcao que recebe um numero de pessoas
function people(num) {
  let array = [num]; // array recebe como primieor valor o num
  while (array.length !== num) {
    // loop para pegar e armazenar cada numero subsequente de num até chegar ao valor 1, ex: se num = 4, vai formar o array [4,3,2,1]
    num = num - 1;
    array.push(num);
    if (num == 1) {
      break;
    }
  }
  let n;
  for (let index = 0; index < array.length; index++) {
    // para calcular o resultado esperado é preciso multiplicar cada valor subsequente até que chegue a 1
    const element = array[index];
    if (index === 0) {
      n = element;
    } else {
      n = n * element; // n vai recebendo o valor da multiplicacão de cada valor subsequente
    }
  }
  return n; // n será o resultado
}
