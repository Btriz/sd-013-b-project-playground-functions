// Desafio 1
function compareTrue(x, y) {
  if (x && y === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let split = [];
  split.push(sentence);
  
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1;
  let distancia2;

  if(mouse > cat1){
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse;
  }
  
  if(mouse > cat2){
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse;
  }

  if (distancia2 > distancia1){
    return "cat1";
  } else if(distancia1 > distancia2){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
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
};
