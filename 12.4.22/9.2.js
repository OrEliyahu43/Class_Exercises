function fun1(arr){
    arr2 = [];
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i].length);

}
return arr2;

}

array = ['dog','carrot','banana','dsadsadsadsadsa','jajaajajaj'];
array2 =["boo","doooo","hoo","ro"];
console.log(fun1(array2));


function func2(arr){
    arr2 =[];
    let counter = 0;
    while(counter!==arr.length){
        arr2.push(arr[counter]);
        counter++;
    }   
}

console.log(func2(array2));