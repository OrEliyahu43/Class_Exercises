const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];


function func1(array1,array2){

isNothingIsSame = true;
    for(let i=0;i<array1.length;i++){
     let item = array1[i];
     for(let j = 0 ; j<array2.length;j++){
        if(item===array2[j]){
        console.log(`item:${item} is the same in both arrays`);
        isNothingIsSame = false;      
        }
     }   
    }
    if(isNothingIsSame) return false;

    }

    func1(food,food1);