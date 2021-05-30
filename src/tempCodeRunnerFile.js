  let numbers = [1, 2, 3, 3, 5, 6, 7, 3, 9, 0, 1];

  for (let index = 0; index = 10; index += 1) {
    let counter = 0;
    let currentNum = numbers[index];

    for (let num of numbers) {
      if (num === currentNum) {
       counter += 1;
      }

      if (counter > 2) {
        console.log('não é possível gerar um número de telefone com esses valores');
      }
    }
  }