const unlock = (str) => {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  var password = "";
  for (let i of str) {
    for (let j in keypad) {
      if (keypad[j].includes(i.toLowerCase())) {
        password += j;
        break;
      }
    }
  }
  return Number(password);
};

// unlock("Nokia");
console.log(unlock("Nokia"));
console.log(unlock("Valut"));
console.log(unlock("toilet"));