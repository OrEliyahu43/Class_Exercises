function isString(str,func){
    if(typeof str === 'string'){
        func(str);
    }
}
function logString(str){
    console.log(str)

}
isString("hellow",logString);

function firstWordUpperCase(string,func){
    let array = string.split(" ");
    console.log(array);
    let str = array[0].toUpperCase();
    array.shift();
    array.unshift(str);
    func(array); 

}

function dashes(array){
    console.log(array.join('-'));    

}

firstWordUpperCase("how are you today?",dashes);
const array5 = [];
const nums = [4,7,53,6,43,565];
for(let i = 0 ;i<nums.length;i++){
    array5[i].push()
}