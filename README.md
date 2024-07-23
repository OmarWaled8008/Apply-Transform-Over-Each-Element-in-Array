<h1>Transform Array Elements with a Custom Mapping Function</h1>
<h3>Introduction</h3>
This project provides a utility to transform an integer array by applying a custom mapping function to each of its elements. Unlike the built-in Array.map method in JavaScript, this implementation demonstrates how to achieve similar functionality manually.

<h3>Features</h3>
Transforms each element of an integer array using a custom mapping function.
Supports a wide range of input values and array lengths.
Flexible function application allows for diverse transformations based on element values and their indices.
<h3>Usage</h3>
Function Definition
The core functionality is provided by the map function, which takes an array and a mapping function as its arguments.

function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}
Example 1: Increment Each Element
Input: arr = [1, 2, 3], fn = function plusone(n) { return n + 1; }

Output: [2, 3, 4]

const arr1 = [1, 2, 3];
const plusone = function(n) { return n + 1; };

const newArray1 = map(arr1, plusone);
console.log(newArray1); // Output: [2, 3, 4]
Example 2: Increment by Index
Input: arr = [1, 2, 3], fn = function plusI(n, i) { return n + i; }

Output: [1, 3, 5]

const arr2 = [1, 2, 3];
const plusI = function(n, i) { return n + i; };

const newArray2 = map(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]
Example 3: Constant Value
Input: arr = [10, 20, 30], fn = function constant() { return 42; }

Output: [42, 42, 42]

const arr3 = [10, 20, 30];
const constant = function() { return 42; };

const newArray3 = map(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]
<h3>Constraints</h3>
0 <= arr.length <= 1000
-10^9 <= arr[i] <= 10^9
The mapping function fn should return a number.
<h3>Installation</h3>
No special installation is required. This function can be directly included in your JavaScript codebase.

<h3>Contributing</h3>
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.
