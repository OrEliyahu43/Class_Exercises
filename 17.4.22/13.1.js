const numbers = [1, -5, 666, 2, 400, 11];

const ascSort = numbers.slice().sort((a,b) => {
return a-b;
})

const desSort = numbers.slice().sort((a,b) =>{
   return  b - a
});

console.log(ascSort);
console.log(desSort);

