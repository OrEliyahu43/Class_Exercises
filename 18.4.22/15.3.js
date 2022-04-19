// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// line 12
// 2. Which debug method did you use to find the bug?
    // run and dubug
// 3. Explain the bug in your own words.
    // index out of bounds
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 2 + 4 + 6 + 8 + 10 = 30



function getSumOfEven(arr) {
    return arr[2] + arr[4] + arr[6] + arr[8] + arr[0];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));