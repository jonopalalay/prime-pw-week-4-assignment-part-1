console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  // console.log( 'Hello World!' )
 return 'Hello World!';

}

// Call the function to test
console.log( hello() );

// function test(){
//   console.log('Test - should say "Hello World!"', hello());
// }
// test()

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  // console.log (`Hello, ${name}! ` )
  return `Hello, ${name}!`;
}

console.log(helloName( 'Michael' ));
console.log(helloName( 'Juliette'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ){
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log( addNumbers(1,2) );


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let timesThree = num1 * num2 * num3;
  return timesThree;
}
console.log(multiplyThree(1, 2, 3) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  // if ( number > 0 ){
  //   return true;
  // }
  //   return false;

    return number > 0; // returns True or False
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let items = []

function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
    }
    return undefined;

  // return (array.length === 0) ? undefined : array.pop();
}

console.log('should return 5: ', getLast([1, 2, 3, 4, 5]) );
console.log('should return undefined: ', getLast([]) );


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find


function find( value, array ){
  for(let i=0; i<array.length; i++){
    if (value === array[i]){
      return true
    }
      return false
    }
}

console.log(find( 1,[1,2,3]) );
console.log(find( 3,[1,2,5]) );




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)){
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
  sum+=numbers[i];
}
  // TODO: loop to add items
  return sum;

}

console.log('The sum of all numbers', sumAll([1,3,4,5]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function inputArray(positiveArray){
  let firstArray = [];
  for (let i=0; i<positiveArray.length; i++){
    if(positiveArray[i] > 0)
      firstArray.push(positiveArray[i]);
    }
  }
  return firstArray;
}



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
