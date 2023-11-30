// FIND PERFECT NUMBERS BETWEEN 1 - 1000
const perfectNumbers = () => {
    const perfectNumbersArray = [];
    for (let i = 1; i < 1000; i++) {
      if (sumOfDividers(i) === i) {
        perfectNumbersArray.push(i);
      }
    }
    console.log(perfectNumbersArray);
  };
  perfectNumbers();