// FIND IF A TWO NUMBERS ARE AMICABLE

let sumOfDividers = (number) => {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum;
  };

let amicableNumbers = (number1, number2) => {
    let sumOfDividersNumber1 = sumOfDividers(number1);
    let sumOfDividersNumber2 = sumOfDividers(number2);
    return sumOfDividersNumber1 === number2 && sumOfDividersNumber2 === number1
      ? `${number1} and ${number2} are friends 🥳`
      : `${number1} and ${number2} are not friends 😥`;
  };
  console.log(amicableNumbers(220, 284));