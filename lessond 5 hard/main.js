let arr = ['2345', '3423', '23', '45', '4567', '1256', '56']

for (let i = 0; i < 7; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
};

let n = 100;

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }

  }
  if (isPrime) {
    console.log(`Делители этого числа: 1 и ${i}`)
  }

};