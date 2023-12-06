// funcao que recebe um valor inteiro
function ordem(inteiro) {
  const string = inteiro.toString(); //transforma o numeor em string
  const array = Array.from(string, Number); //transforma o numero em um array de numeros
  let crescente = array.every(
    // verifica se o valor seguinte é maior ou igual ao anterior
    (el, i) => i === 0 || (el >= array[i - 1] && el - array[i - 1] <= 1)
  );
  let decrescente = array.every(
    // verifica se o valor seguinte é menor ou igual ao anterior
    (el, i) =>
      i === 0 ||
      (el <= array[i - 1] && (el + 1 === array[i - 1] || el === array[i - 1]))
  );
  //resposta
  if (crescente) {
    return "Está ordenado";
  } else if (decrescente) {
    return "Está ordenado";
  } else {
    return "Não está ordenado";
  }
}
