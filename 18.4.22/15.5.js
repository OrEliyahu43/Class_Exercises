// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
    //line 14
// 2. Which debug method did you use to find the bug?
//run and dubug
// 3. Explain the bug in your own words.
    //when we arn't assign counter each time it only calculate counter +1 but not assign it to the variable
// 4. Fix the code and submit it all.


function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));