const reverseStr = (str) => {
  reversedStr = "";
  for (let i of str) {
    reversedStr = i + reversedStr;
  }
  return reversedStr;
};

const spinWords = (str) => {
  let resultantStr = "";
  const arr = str.split(" ");
  for (let i of arr) {
    if (i.length > 4)
      resultantStr += `${reverseStr(i)} `;
    else
      resultantStr += `${i} `;
  }
  return resultantStr;
};

console.log(spinWords("Hey fellow warriors"));    // "Hey wollef sroirraw"
console.log(spinWords("This is a test"));        // "This is a test"
console.log(spinWords("This is another test"));  // "This is rehtona test"