const getIDs = () =>
new Promise((resolve, reject) => {
setTimeout(() => {
resolve([532, 543, 753, 1, 5]);
}, 1500);
});


// async function getIDs(){

// }


const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout(
    (ID) => {
    const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
    };
    resolve(`${ID}: ${recipe.title}`);
    },
    1500,
    recipeID
    );
    });
    };


//     getIDs()
// .then((IDs) => {
// console.log(IDs);
// return getRecipe(IDs[2]);
// })
// .then((recipe) => {
// console.log(recipe);
// })
// .catch((error) => {
// console.log("It is an error!");
// });

async function getRecipiByID(){
    try{
        const ids = await getIDs();
        console.log(ids);
        const recipeId = await getRecipe(ids[2]);
        console.log(recipeId);
    }catch{
        console.log("eror get id or recipe form id");
    }
};


getRecipiByID()
    