const arr = [1,7,3,6,-5,7,3,9];


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function arrayLength(arr){
    let i = 0;
    while(arr[i] !== undefined){
        i++
    }
    return "the array of size of:" +i;

}


console.log(arrayLength(arr));

function arraySum(arr){
    let sum = 0 ;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));


function arrayMulti(arr){
    let multiply = 1 ;
    for(let i=0;i<arr.length;i++){
        multiply = multiply * arr[i];
    }
    return multiply;
}

console.log(arrayMulti(arr));