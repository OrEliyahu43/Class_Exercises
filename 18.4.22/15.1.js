// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
    //arr1 and arr2 is undefine because no ',' between the arrays and javascript dont know how to assign;\
    //can't assign to const variable after decalare;
// 2. Which debug method did you use to find the bug?
    // run and dubug 
// 3. Explain the bug in your own words.
//arr1 and arr2 is undefine because no ',' between the arrays and javascript dont know how to assign;\
    //2.can't assign to const variable after decalare;
// 4. Fix the code and submit it all.


function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3],[5, 66, 23]);