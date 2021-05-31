// Desafio 10
function techList(technologies, name) {
  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
  let object = {};
  let result = [];
  let ordered = technologies.sort();

  for (let item of ordered) {
    object['tech'] = item;
    object['name'] = name;
    result.push(object);
    object = {};
  }

  return result;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < numbers.length; index += 1) {
      let counter = 0;
      let currentNum = numbers[index];
  
      for (let num of numbers) {
        if (num === currentNum) {
        counter += 1;
        } 
        if (counter > 2 | num < 0 | num > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    let phone = '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];

    return phone;
  }
} 

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) & lineB < (lineA + lineC) & lineC < (lineA + lineB)) {
    if (lineA > Math.abs(lineB - lineC) & lineB > Math.abs(lineA - lineC) & lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  } return false;
}

// Desafio 13
function hydrate(drinks) {
// regular expression: \d significa que quero achar números, g (global flag) significa que quero todos
  let reg = /\d/g; 
  let numbers = drinks.match(reg);
  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index]);
  }
  if (sum > 1) {
    return sum + ' copos de água';
  } return sum + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};






