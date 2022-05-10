
const array1 = ['dad',"mom","brother","sister"];
const array2 = ['dad',"mom",5,"brother","sister"];
function makeAllCaps(wordsArray){
    return new Promise((resolve,reject) => {
        
        wordsArray.forEach((element,index) => {
          const newWord = element.toUpperCase();
          wordsArray[index] = newWord;
        });
        resolve(wordsArray)
        
    });
}
function sortWords(array){
    return new Promise((resolve,reject) =>{
        let onlyWords = true;
        for(let i =0 ; i<array.length;i++){
            if(typeof array[i] !== "string"){
                onlyWords = false;
                break;
            }
        }
        if(onlyWords){
            resolve(array.sort())
        }
        else{
            reject()
        }

    })

}




const answer =
 makeAllCaps(array1).then(wordsArray => sortWords(wordsArray))
 .then((wordsArray) => {console.log(wordsArray)})
 .catch(()=> {
     console.log("the array not only words!!")
 })