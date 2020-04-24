function equalShiftsAmount(input) {
  let str = input;
  let amount = 0;
  let shiftAmount = 0;
  const len = str.length;

  while (shiftAmount !== len) {
    const char = str.slice(-1);

    str = `${char}${str.slice(0, -1)}`;

    shiftAmount++;

    if (input === str) {
      amount++
    }
  }

  return amount;
}

console.log(equalShiftsAmount('ekoapp'));
console.log(equalShiftsAmount('ekoeko'));
