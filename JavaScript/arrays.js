                                                         Arrays
-- Arrays are lists of ordered, stored data. They can hold items that are of any data type. 
Arrays are created by using square brackets, with individual elements separated by commas.

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];


-- Index
Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index surrounded by square brackets.

// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300


-- Mutable
JavaScript arrays are mutable, meaning that the values they contain can be changed.

Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop().

const names = ['Alice', 'Bob'];

names.push('Carl');
// ['Alice', 'Bob', 'Carl']


-- Property .length
The .length property of a JavaScript array indicates the number of elements the array contains.

const numbers = [1, 2, 3, 4];

numbers.length // 4


--Method .push()
The .push() method of JavaScript arrays can be used to add one or more elements to the end of an array. .push() mutates the original array returns the new length of the array.

// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);


-- Method .pop()
The .pop() method removes the last element from an array and returns that element.

const ingredients = ['eggs', 'flour', 'chocolate'];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']


-- More Array methods
Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(),
 and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

Below, we will explore some methods that we have not learned yet.
You should also consult the MDN documentation to learn what each method does !	

-- Use the .shift() method to remove the first item from the array

-- Use the .unshift() method to addd an item at the beginning of the array

-- slice()
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Imp: The original array will not be changed i.e it does not mutate the array.


-- splice()
The splice() method adds/removes items to/from an array, and returns the removed item(s).
Note: This method changes the original array i.e it makes the array mutable.

Syntax-
array.splice(index, howmany, item1, ....., itemX)
                                                    Parameter Values
Parameter-
index	Required. An integer that specifies at what position to add/remove items, use negative values to specify the position from the end of the array.

howmany	Optional. The number of items to be removed. If set to 0, no items will be removed.

item1, ..., itemX	Optional. The new item(s) to be added to the array.