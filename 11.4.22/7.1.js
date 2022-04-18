function fun1(integers){

    const arr =[]
    for(let i=0;i<integers.length;i++){
       if( arr.indexOf(integers[i])=== -1){
           arr.push(integers[i]);
       }
    }
    return arr;
}


const arr =[2,2,3,3,4,5,6,7];


console.log(fun1(arr));