population = [9,100,4,5];


const percentageOfWorld1 = population => {
    return (population/7900) * 100;
}

function populationPercentages(arr){

    percentages = [];
    for(let i=0;i<arr.length;i++){
        percentages.push(percentageOfWorld1(arr[i]));
    }
    return percentages;
}

console.log(populationPercentages(population));