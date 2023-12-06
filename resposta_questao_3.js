// funcao que recebe uma string de caracteres (), [] e {}
function valid(string) {
  let mudou = true; // verifica se houve mudanca na str dentro do loop, se não, vira false
  let str = string.replace(/\(\)|\[\]|\{\}/g, ""); // verifica se na string existem elementos sequenciais de (), {} e [] e os remove da string
  while (str !== "") {
    // se mesmo com as remocoes anteriores a str ainda for diferente de vazia, percorre o laço até que seja vazia ou não haja mudança
    let strOriginal = str;
    str = str.replace(/\(\)|\[\]|\{\}/g, "");
    mudou = str !== strOriginal;
    if (mudou == false) {
      // assim que não ha mais mudanças na string o laço para
      break;
    }
  }
  //resultado
  if (str === "") {
    return "é uma sequência válida";
  } else {
    return "não é uma sequência válida";
  }
}
