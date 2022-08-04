// Crie uma função recursiva para descobrir o menor número inteiro
// divisível por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.


const recurse = (i) => {
  const divider1 = 2;
  const divider2 = 3;
  const divider3 = 10;

  const remainder = (i % divider1) + (i % divider2) + (i % divider3);

  remainder === 0 ? console.log(i) : (
    i++,
    recurse(i)
  )
};

recurse(1)
