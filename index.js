let arr = [1, 2, 3, 4, 5];

let plusone = function (x) {
  return x + 1;
};
let plusI = function (x, i) {
  return x + i;
};
let constant = function () {
  return 42;
};

let map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

console.log(map(arr, plusone));
console.log(map(arr, plusI));
console.log(map(arr, constant));
