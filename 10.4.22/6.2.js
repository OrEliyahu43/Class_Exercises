const people = ["Greg","Mary","Devon","James"];

for(let i = 0 ; i<people.length;i++){
    console.log(people[i]);
}

people.shift("Greg");
console.log(people);
people.pop();
console.log(people);
people.unshift("Matt");
console.log(people);
people.push("Or");
console.log(people);
for(let i = 0 ; i<people.length;i++){
    console.log(people[i]);
    if(people[i]==="Mary"){
        break;
    }
}

const peopleCopy = people.slice();
console.log(peopleCopy);
peopleCopy.shift();
peopleCopy.shift();
console.log(peopleCopy);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people.splice(0,1,"Greg");
console.log(people);
people.splice(3,1,"James");
people.splice(2,1,"Elizabeth","Artie");
console.log(people);
let withBob = people.concat("Bob");
console.log(withBob);
console.log(people);