const bingo = (arr) => {
  let val = 0;
  for (let i of arr) {
    if (i === 2 || i === 7 || i === 9 || i === 14 || i === 15) {
      val += 1;
    }
  }
  return (val >= 5) ? "WIN" : "LOSE";
};

// arr = [21, 13, 2, 7, 5, 14, 7, 15, 9, 10];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(bingo(arr));