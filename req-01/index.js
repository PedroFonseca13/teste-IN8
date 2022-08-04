// Crie uma função recursiva para descobrir o menor número inteiro
// divisível por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.


const recurse = () => {
  const divider1 = 2;
  const divider2 = 3;
  const divider3 = 10;

  for (let i = 0; i <= 9; i++) {
    if (i % divider1 == 0 && i % divider2 == 0 && i % divider3 == 0) {
      console.log(i)
    }
  }
}

recurse()
