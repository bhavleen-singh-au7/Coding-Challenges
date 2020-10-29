// 2 is the only even prime number
const primeNum = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const finalVal = primeNum(7);
finalVal
  ? console.log("Given Value is Prime Number")
  : console.log("Given Value is NOT a Prime Number");
