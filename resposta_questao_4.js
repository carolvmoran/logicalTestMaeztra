// funcao que recebe uma matriz de anos
function years(matriz) {
  let contaAnos = {}; // objeto que receberá os anos e quantas vezes se repetem
  matriz.forEach((pessoa) => {
    // laço para percorrer o array de cada pessoa e verificar se os anos de trabalho são iguais
    for (let ano = pessoa[0]; ano <= pessoa[1]; ano++) {
      contaAnos[ano] = (contaAnos[ano] || 0) + 1; // armazena quantas vezes o ano se repete na matriz
    }
  });
  let maisTrabalhados = []; // array que receberá os anos com maior repetição
  let max = 0; // maximo de repeticoes

  for (let ano in contaAnos) {
    //ano é o ano do laço e contaAnos é o objeto com todos os anos e a quantidade de vezes que se repetem
    if (contaAnos[ano] > max) {
      // verifica se a quantidade de vezes que o ano se repete é maior que max
      maisTrabalhados = [ano]; // se a verificacao acima é verdadeira, e mais trabalhados recebe o valor do ano atual do loop, ele sempre será substituido até que max nào se altere mais
      max = contaAnos[ano]; // e max recebe o valor das repeticoes daquele ano
    } else if (contaAnos[ano] === max) {
      // se o valor de max não subir masi e valor de das repeticoes do ano se igualar a ele
      maisTrabalhados.push(ano); // assim que entrar no else, todos os anos que suas repeticoes se igualam a max entram nesse array
    }
  }
  // resultado
  return `"Os anos com mais pessoas trabalhando são:" ${maisTrabalhados.map(
    Number
  )} "e o intervalo entre eles é de" ${maisTrabalhados[0]} "até" ${
    maisTrabalhados[maisTrabalhados.length - 1]
  }`;
}
