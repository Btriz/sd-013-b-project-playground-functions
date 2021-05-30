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
function generatePhoneNumber() {
  // seu código aqui
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






