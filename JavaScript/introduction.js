<head>
<meta name="google-site-verification" content="QFfxWLqpw6D64US3CFVhE7yC1yOscxJ9Emt1JyWvzfk" />  
</head>                                                       JavaScript

JavaScript is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run. It is a scripting language.


-- Camel case
It is the practice of writing phrases such that each word or abbreviation in the middle of the phrase
begins with a capital letter, with no intervening spaces or punctuation. i.e every First Letter of every Word Except the First Word is UpperCase.
Example: let camelCase. We Write Js codes in camel Case


-- Console.log()
The console.log() method is used to log or print messages to the console. It can also be used to print objects and other info.
Important: Console here is an Object. We shall discuss about these Objects later.
Example: 
console.log('Hi there!');
// Prints: Hi there!


-- Methods in JS
Methods return information about an object, and are called by appending an instance with a period "." , the method name, and parentheses.

// Returns a number between 0 and 1
Math.random();


-- Libraries in JS
Libraries contain methods that can be called by appending the library name with a period ., the method name, and a set of parentheses.

 Math.random();
//☝️ Math is the library


-- Numbers
Numbers are a primitive data type. They include the set of all integers and floating point numbers.

let amount = 6;
let price = 4.99;



-- Strings
Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";



-- String.length
The .length property of a string returns the number of characters that make up the string.
Example: 
let message = 'good night';
console.log(message.length);
// Prints: 10

console.log('howdy'.length);
// Prints: 5


-- String Concatenation
In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.

let service = 'credit card';
let month = 'May 30th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';

console.log(displayText);
// Prints: Your credit card bill is due on May 30th.


-- String Interpolation
String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).

It can be performed using template literals: text ${expression} text.

let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;


-- Some Math Functions
Math.random()
The Math.random() function returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1.

console.log(Math.random());
// Prints: 0 - 0.9
Math.floor()
The Math.floor() function returns the largest integer less than or equal to the given number.

console.log(Math.floor(5.95)); 
// Prints: 5

-- Comments in JS

-Single Line Comments
In JavaScript, single-line comments are created with two consecutive forward slashes //.

// This line will denote a comment

-Multi-line Comments
In JavaScript, multi-line comments are created by surrounding the lines with /* at the beginning and */ at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc.

/*  
The below configuration must be 
changed before deployment. 
*/

let baseUrl = 'localhost/taxwebapp/country';


-- operators in JS

- Arithmetic Operators
JavaScript supports arithmetic operators for:

+ addition
- subtraction
* multiplication
/ division
% modulo

// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5

- Assignment Operators
An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:

+= addition assignment
-= subtraction assignment
*= multiplication assignment
/= division assignment
let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number); 
// Prints: 120

-Comparison operators
A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values.
 In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. 
 This behavior generally results in comparing the operands numerically. 
 The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons.

 Equal (==)	Returns true if the operands are equal.	3 == var1
"3" == var1
 3 == '3'
Not equal (!=)	Returns true if the operands are not equal.	var1 != 4
var2 != "3"
Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	3 === var1
Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	var1 !== "3"
3 !== '3'
Greater than (>)	Returns true if the left operand is greater than the right operand.	var2 > var1
"12" > 2
Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1
var1 >= 3
Less than (<)	Returns true if the left operand is less than the right operand.	var1 < var2
"2" < 12
Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	var1 <= var2
var2 <= 5

- Logical operators
Operator	Usage	Description
Logical AND (&&)	expr1 && expr2	Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
Logical OR (||)	expr1 || expr2	Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
Logical NOT (!)	!expr	Returns false if its single operand that can be converted to true; otherwise, returns true.

- Conditional (ternary) operator
The conditional operator is the only JavaScript operator that takes three operands.
 The operator can have one of two values based on a condition. The syntax is:
condition ? val1 : val2
If condition is true, the operator has the value of val1. Otherwise it has the value of val2.
 You can use the conditional operator anywhere you would use a standard operator.

- Bitwise shift operators
The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be shifted. The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to thirty-two-bit integers and return a result of the same type as the left operand.

The shift operators are listed in the following table.

Left shift
(<<) This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.	9<<2 yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.

Sign-propagating right shift (>>) This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left.	9>>2 yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.

Zero-fill right shift (>>>) This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.	19>>>2 yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.


-- Variables
Variables are used whenever there’s a need to store a piece of data.
A variable contains data that can be used in the program elsewhere.
 Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.


 - let Keyword ES6
let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.

let count; 
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10

-const Keyword ES6
A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.

const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.
