
function isGraterThan10(number) {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number)
        }
        else {
            reject(number)
        }
    })
}

isGraterThan10(25).then((number)=>{
    console.log(`${number} is grater than 10`)
}).catch((number) => console.log(`${number} is less than 10`));