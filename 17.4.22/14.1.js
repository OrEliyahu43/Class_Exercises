const array = [4,7,88,9,43,2,1,4,5,6,33];
const array2 = [2,1,4,6,7,10]


function max(array){

    const max = array.reduce((max , curentVal) =>{
        if(curentVal>max) return curentVal;
        return max;
    })
    return max;

}

console.log(max(array));


function sum(array){
    const sum = array.reduce((sum , curentVal) =>{
      if(curentVal%2===0) sum+= curentVal;
      return sum;  
    },0)
    return sum;
}

console.log(sum(array2));


function average(array){
    const average = array.reduce((sum , curentVal) =>{
      sum+= curentVal;
      return sum;  
    })
    return average/array.length;
}

console.log(average(array2));
