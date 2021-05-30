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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};






