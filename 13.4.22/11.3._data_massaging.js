const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ]
//question 1
    const nameReturn = (array) =>{
        const newArray =[];
        array.forEach(element => {

            newArray.push(element.name);
            
        });
        return newArray;
    }

    console.log(nameReturn(data));

    //question 2

    const before1990 = (array) => {
        let arrayNewObjects = [];
        array.forEach(elemnt =>{
        let birdayToArray = elemnt['birthday'].split('-');
        let year = Number(birdayToArray[birdayToArray.length-1]);
        if(year<1990){
            arrayNewObjects.push(elemnt);
        }
        })
        return arrayNewObjects;
    }


    console.log(before1990(data));



   

    // let array10 = ['food','meat','cocos','wine','food','meat'];

    // for(let i = 0 ; i<array10.length;i++){
    //     object1[array10[i]] = object1[array10[i]] + 1 || 1;

    // }

    // console.log(object1);

//question 3 

const foodCount = array =>{
    let foodObject = array.map(element =>{
        return element['favoriteFoods'];
    })
    let foodCountsObjects = []
    foodObject.forEach(element =>{
        for(let val1 in element){
            for(let val2 of element[val1]){
                foodCountsObjects[val2] = foodCountsObjects[val2]+1 || 1;
            }
           
        }
    })

    return foodCountsObjects;
}


console.log(foodCount(data));