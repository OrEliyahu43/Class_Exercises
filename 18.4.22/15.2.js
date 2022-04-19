// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
 // line 15,9,11
// 2. Which debug method did you use to find the bug?
    ////run and dubug
// 3. Explain the bug in your own words.
    //the name of the function not wrote correct and bollean expression not wrote correctly , wrong syntax
    //it mean if a>true?
// 4. Fix the code and submit it all.
function findSmallest(a, b, c) {
    if (c<a && c<b) {
        return c;
    } else if (a<b && a<c) {
        return a;
    } else {
        return b;
    }
}
console.log(findSmallest(52, 66, 2));