

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
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat1);
  if (positionCat1 === positionCat2) {
    return 'Os gatos trombam e o rato foge';
  }
    return positionCat1 > positionCat2 ? 'cat2' : 'cat1';
  }
  

// Desafio 8
function fizzBuzz(obj) {
  let codigoNoArray  = [];
  for (let index = 0; index < obj.length; index += 1) {
    codigoNoArray.push(solucao(obj[index]));
  }
  return codigoNoArray;
  }
  function solucao(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'fizzBuzz';
    }
    if (n % 5 === 0) {
      return 'buzz';
    }
    if (n % 3 === 0) {
      return 'fizz';
    }
    return 'bug!';
  }

// Desafio 9
function encode(codigo) {
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
};
let entrada = codigo;
entrada = entrada.replace (/[aeiou]/g, (m) => letras[m]);
return entrada;
}
function decode(decodifica) {
  let numeros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
};
let saida = decodifica;
saida = saida.replace (/[12345]/g, (m) => numeros[m])
return saida;
}

// Desafio 10
function techList(obj, newName) {
  if(obj.length === 0) return 'Vazio!';
  let newArray = [];
  obj.sort();
  for (let i = 0; i < obj.length; i += 1){
    const newObj = {
      name: newName,
      tech: obj[i],
    };
    newArray.push(newObj);
  }
  return newArray;
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
