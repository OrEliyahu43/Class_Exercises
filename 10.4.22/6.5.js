/* 
same object
---------
​*/
 const sameObj = {
	name: "toam",
	age: 22,
};
​
const arrayOfObjects = new Array(100).fill(sameObj);
​
// console.log(arrayOfObjects);
/*
sa
/*
question 2
-----
​
const arrayOfNumbers = new Array(100).fill(1);
​
const arrayOfNumbersTo100 = Array.from(arrayOfNumbers, (item, index) => item * index + 1);
​
console.log(arrayOfNumbersTo100);
​
function callbackFunction(item, index) {
	return item * index + 1;
}
​
Array.from(arrayOfNumbers, callbackFunction);
​
// console.log(arrayOfNumbersTo);
​
function from(array, callbackFunction) {
	const newArray = [];
​
	for (let i = 0; i < array.length; i += 1) {
		newArray.push(callbackFunction(array[i], i));
	}
​
	return newArray;
}
​
const Array2 = {
	from: from,
};
​
const newArrayOfNumbersTo100 = Array2.from(arrayOfNumbers, (item, index) => item * index + 1);
​
console.log(newArrayOfNumbersTo100);
*/
/*
question 3
----------
const objectToArray = {
	key1: "value1",
	key2: "value2",
	key3: "value3",
	key4: "value4",
	key5: "value5",
	key6: "value6",
	key7: "value7",
	key8: "value8",
};
​
// for (let i = 0; i < objectToArray.length; i += 1) {
// 	console.log(objectToArray[i]);
// }
​
// const newArray = [];
​
// for (let key in objectToArray) {
// 	newArray.push(objectToArray[key]);
// }
​
// console.log(newArray);
​
const newArray = Object.values(objectToArray);
console.log(newArray);
​
const arrayToObject = ["a", "b", "c", "c", "d", "d"];
​
const newObject = {};
​
for (let i = 0; i < arrayToObject.length; i += 1) {
	newObject[i] = arrayToObject[i];
}
​
console.log(newObject);
​
// const result = { 0: "a", 1: "b", 2: "c", 3: "c", 4: "d", 5: "d" };
*/
/*
question 4
----------
​
const array = [1, 2, 3, 4, 5, 6];
​
console.log(Array.isArray(array));
​
console.log(array instanceof Array);
*/
/*
question 5
----------
​
const array2 = Object.assign([], array);
const array3 = array.slice(0);
const array4 = [].concat(array);
// const array5 = array.splice(0);
const array6 = [...array];
​
array6[2] = 26;
console.log("array:", array);
console.log("array2:", array6);
*/