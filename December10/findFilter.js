// Find vs Filter
let list = [5, 10, 15, 20, 21, 25];

// Filter creates new array of True statements
let result = list.filter((lst) => lst % 5 !== 0);
console.log(result);

// Returns first occurence of letter to be find
// If no value find it will show undefined
let res = list.find((lst) => lst === 21);
console.log(res);
