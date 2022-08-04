const recurse = () => {
  const divider1 = 2;
  const divider2 = 3;
  const divider3 = 8;

  for (let i = 0; i <= 9; i++) {
    if (i % divider1 == 0 && i % divider3 == 0) {
      console.log(i)
    }
  }
}

recurse()
