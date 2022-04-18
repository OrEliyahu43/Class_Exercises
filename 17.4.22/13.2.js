const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const ascSort = foods.slice().sort();


const desSort = ascSort.slice().reverse();

console.log(ascSort);
console.log(desSort);


///b-question
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

    const sortedArrayDes = foodsWithUpperCase.slice().sort((a,b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a === b) return 0;
        return a < b ? -1 : 1;
    });

    
    const sortedArrayAsc = foodsWithUpperCase.slice().sort((a,b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a === b) return 0;
        return a > b ? -1 : 1;
    });


    
    console.log(sortedArrayAsc);
    console.log(sortedArrayDes);

    //question c

    const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
    const sortWordsLength = words.slice().sort((a,b) => {
        a = a.length;
        b = b.length;
        if( a === b) return 0;
        return a < b ? -1 : 1;
    });

    console.log(sortWordsLength);