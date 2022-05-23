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
function highestCount(array) {
  let resultado = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index])
      maiorNumero = array[index];
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (maiorNumero === array[index2])
      resultado += 1;
  }
  return resultado;
}
// Desafio 7
function catAndMouse(catAndMouse) {
  if ('cat1' > 'cat2') {
    return 'cat 1 mais próximo do mouse';
  } else if ('cat2' > 'cat1') {
    return 'cat 2 mais próximo do mouse';
  } else if ('cat1' === 'cat2' === 'mouse') {
    return 'os gatos trombam e o rato foge';
  }
    resultado;
  }
  

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(voltar) {
  let palavra = ['a', 'e', 'i', 'o', 'u'];
  repetir('a', 'z');
  return voltar;
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
