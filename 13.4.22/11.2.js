const array1 = [1,2,3,5,6,7,8,9,55,6,34,5];   // question 1

function doubleValues(array){
    const newArray = array.map(num => {
        return doubled(num);
    })
    return newArray;

}

function doubled(num){
    return num * 2;
}

console.log(doubleValues(array1));

//question 2:

function onlyEvenValues(array){
    const newArray =[];
    array.forEach(num => {
        if(num%2==0){
            newArray.push(num);
        }
        
    });
    return newArray;
}

console.log(onlyEvenValues(array1));

//question 3


function showFirstAndLast(array){
    const newArray =[];
     array.forEach((elemnt,index) =>{
        if(index===0 || index=== array.length-1){
            newArray.push(elemnt.toString());
        }
    })
    return newArray;
}
console.log(showFirstAndLast(array1));

/////question 4  A, E, I, O, U, "something"

function vowelCount(string){
    const array = string.split('');
    const object1 ={
        "a" : 0,
        "e" : 0,
        "i" : 0,
        "o" : 0,
        "u" : 0
    };
    array.forEach(letter => {
        switch(letter){
            case 'a':
                object1['a']+=1;
                break;
            case 'e':
                object1['e']+=1;
                break;
            case 'i':
                object1['i']+=1;
                break;
            case 'o':
                object1['o']+=1;
                break;
            case 'u':
                object1['u']+=1;
                break;
        }
        
    })
    return object1;
}


console.log(vowelCount("hellow world"));


//qustion 5

function capitalize(string){
const array = string.split("");
const newArray =[];
array.forEach(letter =>{
    newArray.push(letter.toUpperCase());

    
})
let newString = newArray.join(' ');
return newString;
}

console.log(capitalize("abbbagadda  dadada"));

//question 6

function shiftLetters(string){
    const array = string.split('');
    let newArray =[]
    array.forEach(letter =>{
        let charCode;
        charCode = letter.charCodeAt()+1;
        let newCharCode = String.fromCharCode(charCode);
        newArray.push(newCharCode);
    })
    newArray = newArray.join("");
    return newArray;
}

console.log(shiftLetters("abcde"));

//question 7



function swapCase(string){
    const arraySubString = string.split(" ");
    const arrayTarget = arraySubString.map((word,index) =>{
        if(index%2===0){
           return capitalize(word);
        }
        else{
            return word;
        }

    })
    let str = arrayTarget.join(" ");
    return str;
}

console.log(swapCase("abbba gaada lama kamama hohe"));