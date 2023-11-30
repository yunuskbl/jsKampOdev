
  // FIND PRIME NUMBERS IN A GIVEN NUMBERS ARRAY
const findPrimeNumbers = (...numbers) => {
    const primeNumbersArray = [];
    numbers.forEach((number) => {
      let count = 0;
  
      if (number === 2 || number % 2 !== 0) {
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            count++;
          }
        }
      }
  
      if (count === 2) {
        primeNumbersArray.push(number);
      }
    });
    console.log(primeNumbersArray);
  };
  findPrimeNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);