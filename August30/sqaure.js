function square(int) {
  const str = int + "";
  var result = "";
  for (let i of str) {
    result += i * i;
  }
  return Number(result);
}

console.log(square(9119));
