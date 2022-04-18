const myCountry = {
    "country" : "Israel",
    "capital" : "Jerusalem",
    "language": "Hebrew",
    "population" : 9,
    "neighbors" : ["Syria","Lebanon","Egypt","Jordan"],

    describe(){
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
            have ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland(){
        return this.neighbors.length === 0 ? true : false;
    }

};

myCountry.describe();
console.log(myCountry.checkIsland());