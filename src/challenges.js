// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// compareTrue (true, true)

// Desafio 2
function calcArea(base, height) {
let conta = (base * height) / 2;
return conta;
  }
  

// Desafio 3
function splitSentence(frase) {
  let separarPalavras = frase.split (' ');
  return separarPalavras;
}

// Desafio 4
function concatName(palavras) {
  let retornar = palavras [palavras.length - 1] + ', ' + (palavras[0]);
  return retornar;
}

// Desafio 5
function footballPoints(wins, ties) {
 let resultado = (wins * 3) + ties;
  return resultado;
}


// Desafio 6
function highestCount(maiorNumero) {
  let meuArray = [0];
  maiorNumero;
  for (let index = 0; index < maiorNumero.length; index += 1) {
    const element = meuArray[maiorNumero];
    
  }
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
