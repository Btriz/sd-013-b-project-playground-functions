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
  
  let word = "";
  let split = [];

  for (let index = 0; index < sentence.length; index += 1) {

    if (sentence[index] !== " ") {
      word = word + sentence[index];
    } else {
      split.push(word);
      word = "";
    }
  }
  
  split.push(word);

  return split;
}

// Desafio 4
function concatName(names) {

  let lastPosition = names.length - 1;

  let first = names[0];

  let last = names[lastPosition];

  return last + ", " + first;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {

  let highest = numbers[0]
  
  for (let index = 1; index < numbers.length; index += 1) {
    if (highest < numbers[index]) {
      highest = numbers[index];
    }
  }

  let counter = 0

  for (index = 0; index < numbers.length; index += 1) {
    if (highest === numbers[index]) {
      counter += 1;
    }
  }

  return counter; 
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1;
  let distance2;

  if(mouse > cat1){
    distance1 = mouse - cat1;
  } else {
    distance1 = cat1 - mouse;
  }
  
  if(mouse > cat2){
    distance2 = mouse - cat2;
  } else {
    distance2 = cat2 - mouse;
  }

  if (distance2 > distance1){
    return "cat1";
  } else if(distance1 > distance2){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {

  let result = [];

  for (let index = 0; index < numbers.length; index +=1) {
    
    let num = numbers[index];

    if (num % 3 === 0) {
      if (num % 5 === 0){
        result.push("fizzBuzz");
      } else {
        result.push("fizz");
      }
    } else if (num % 5 === 0){
      result.push("buzz");
    } else {
      result.push("bug!");
    }

  }
  
  return result;
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
