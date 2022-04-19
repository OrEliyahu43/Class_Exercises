// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
//line 9
// 2. Which debug method did you use to find the bug?
// run and dubug
// 3. Explain the bug in your own words.
    // if sum not initalize its undefined and undefined + number is NaN
    //and when it returned NaN nothing printed
// 4. Fix the code and submit it all.
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}



console.log(calcAverage([85, 90, 92]))

