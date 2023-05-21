  

  // chapter21atrt///

// var userInput =prompt();
// var allLower = userInput.toLowerCase();
// console.log(allLower);
  


// var x = prompt();
// var result = x.toLowerCase();
// console.log(result);



// var y = prompt();
// var result = y.toUpperCase();
// console.log(result);


//  var  str = "HaMId RazA"
//  var results = str.toLowerCase();
//  console.log(results);

//  var ar = ["hamid","UBAID", "MUghEEs", "MOhtaSHIM" ];
//  var arry = ar.toLowerCase();
//  console.log(arry);


// var a = "hAmId RAza"
// var b = a.toUpperCase();
// alert(b);


// var myVariable = "karachi" 
// console.log(myVariable .toLowerCase());  

//chapter21end//


//chapter22-25start//

// var  sameWords = "captain";
// var  slicedWord = sameWords.substring(2, 4);
// console.log(slicedWord);


// var  sameWords = "captain";
//  var characterCount = sameWords.length;
// console.log(characterCount); 

// var  animal = "elephant";
// var  seg = animal.slice(2, 6);
// console.log(seg); 

// var myString = "Hello, world!";
// var characterCount = myString.length;
// console.log(characterCount); 



// var  slicedString = myString.slice(1, -3);
// console.log(slicedString); 


// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// var text = "Let it go, let it go, can't hold it back anymore";
// var searchString = "go";
// var lastIndex = text.lastIndexOf(searchString);

// if (lastIndex !== -1) {
//   var firstCharIndex = lastIndex;
//   while (firstCharIndex >= 0 && text[firstCharIndex] !== " ") {
//     firstCharIndex--;
//   }
//   var indx = firstCharIndex + 1;
//   console.log(indx); 
// } else {
//   console.log("Substring not found");
// }


// var  text = "Let it go, let it go, can't hold it back anymore";
//  var  searchString = "go";
// var  lastIndex = text.lastIndexOf(searchString);

// if (lastIndex !== -1) {
//   var firstCharIndex = lastIndex;
//   while (firstCharIndex >= 0 && text[firstCharIndex] !== " ") {
//     firstCharIndex--;
//   }
//   var  indx = firstCharIndex + 1;
//   console.log(indx); 
// } else {
//   console.log("Substring not found");
// }


// var str = "abcde";
// var charAtIndex2 = str.charAt(2);
// console.log(charAtIndex2); 




// var str = "Hello, world!";
// var x = str[str.length - 1];
// console.log(x); 


//   var myString = "Hello, world!";
// var targetCharacter = "l";

// if (myString.charAt(2) === targetCharacter) {
 
//   console.log("The 3rd character is " + targetCharacter);
// } else {
  
//   console.log("The 3rd character is not " + targetCharacter);
// }


// let myString = "Hello, world!";
// let charArray = [];

// for (let i = 0; i < myString.length; i++) {
//   charArray[i] = myString.charAt(i);
// }

// console.log(charArray); 



// var x = "This is an abc example abc.";
// var y = x.replace(/abc/g, "xyz");
// console.log(y); 

//chapter22-25end//





//chapter26start//

// var number = 3.7;
// var roundedNumber = Math.round(number);

// console.log("The rounded number is: " + roundedNumber);

// var origNum = 4.2;
// var roundNum = Math.ceil(origNum);

// console.log("The rounded-up number is: " + roundNum);





//  var origNum = 7.8;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);



//chapter26end//

//chapter27start//

// var num = 0.5;
// var roundedNum = Math.round(num);

// console.log(roundedNum); 



// var  randomNumber = Math.random();

// console.log(randomNumber); 




// var  diceRoll = Math.floor(Math.random() * 6) + 1;

// console.log(diceRoll); 


// var randomNum = Math.random();


// var  tossResult = randomNum < 0.5 ? 'Heads' : 'Tails';

// console.log(tossResult); 


//chapter27end//

//chapter28-29start//


// var str = "456";
// var num = Number(str);

// console.log(num);


// function stringToInteger(str) {
//   return parseInt(str);
// }

// var str = "123";
// var  num = stringToInteger(str);

// console.log(num); 


// var str = "2.718";
// var floatNum = Number(str);

// console.log(floatNum); 

// const intRegex = /^\d+$/; // Matches one or more digits
// const decimalRegex = /^\d+(\.\d+)?$/; // Matches digits with optional decimal part

// const str = "123";

// if (intRegex.test(str)) {
//   console.log("Conversion to integer possible.");
// } else {
//   console.log("Conversion to integer not possible.");
// }

// if (decimalRegex.test(str)) {
//   console.log("Conversion to decimal possible.");
// } else {
//   console.log("Conversion to decimal not possible.");
// }




// function numberToString(number) {
//   return number.toString();
// }

// const number = 42;
// const stringNumber = numberToString(number);
// console.log(stringNumber); 




// function decimalToInteger(decimalString) {
//  var  decimalNumber = parseFloat(decimalString);
//  var  integerNumber = parseInt(decimalNumber, 10);
//   return integerNumber;
// }

// var decimalString = "3.14";
// var integerNumber = decimalToInteger(decimalString);
// console.log(integerNumber); 

//chapter29end//

//chapter30start//

//  var num = 3.14159265359;
// var newNum = num.toFixed(4).toString();

// console.log(newNum); 


// var num = 3.14159265359;
// num = Number(num.toFixed(2));

// console.log(num); 

// var originalNumber = 3.14159265359; 

// var roundedNumber = Math.round(originalNumber * 100) / 100; 

// var roundedString = roundedNumber.toString(); 

// alert(roundedString); 
//  chapter30end//

// chapter31-34start//


// var DATE = new Date();

// console.log(DATE)


// var D = new Date();
// var DA = D.toString();
// console.log(D);


// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[d]);



// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
// console.log("Milliseconds:", milliseconds);


// var later = new Date(2020, 11, 31);
// console.log(later);



// var parse = new Date ()

// alert(Date.parse("1980-01-01"));


// var currentDate = new Date();  

// currentDate.setFullYear(2023); 

// console.log(currentDate);     


// function changeMonthToJanuary(date) {
//   date.setMonth(0); 
// }


// var currentDate = new Date(); 
// console.log("Before:", currentDate);  change

// changeMonthToJanuary(currentDate);
// console.log("After:", currentDate); 




// function changeMinutesToSpecificValue(time) {
//   var newMinutes = prompt("Enter the new minutes value:");
//   time.setMinutes(parseInt(newMinutes));
// }


// var currentTime = new Date(); 
// console.log("Before:", currentTime);  change

// changeMinutesToSpecificValue(currentTime);
// console.log("After:", currentTime);





// function calculateAge(birthDate) {
//   var today = new Date(); 

//   var birthDateObj = new Date(birthDate); 

//   var age = today.getFullYear() - birthDateObj.getFullYear(); // 
  
//   if (
//     today.getMonth() < birthDateObj.getMonth() ||
//     (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())
//   ) {
//     age--; 
//   }

//   return age;
// }


// var birthDate = "1990-05-15"; 
// var age = calculateAge(birthDate); 
// console.log("Age:", age); 
  // chapter31-34end//

  // chapter35-37start//

  // function displayAlert() {

  
    
  // }
  
  // displayAlert();


//   var name = askName();
// console.log("User's name:", name);



// deffunction_one():
//     print("This is function one.")

// deffunction_two():
//     print("This is function two.")

// defcall_functions():
//     function_one()
//     function_two()


//  concatenate_strings(str1, str2):
//     concatenated_string = str1 + str2
//     return concatenated_string

//  function result = concatenate_strings("Hello, ", "World!")

// #  result
// print(result)



// function calculateAverage(numbers) {
//   var sum = 0;
//   var count = numbers.length;

//   for (var i = 0; i < count; i++) {
//     sum += numbers[i];
//   }

//   var average = sum / count;
//   return average;
// }


// var numbersArray = [5, 10, 15, 20, 25];
// var averageResult = calculateAverage(numbersArray);
// console.log("Average:", averageResult);



// function countLetters(word) {
//   var letterCounts = {};

//   for (var i = 0; i < word.length; i++) {
//     var letter = word[i].toLowerCase();

//     if (letter !== ' ') {
//       if (letterCounts[letter]) {
//         letterCounts[letter]++;
//       } else {
//         letterCounts[letter] = 1;
//       }
//     }
//   }

//   return letterCounts;
// }


// var word = "Hello World";
// var result = countLetters(word);
// console.log("Letter Counts:", result);


// function calculateAge(dateOfBirth) {
//   var currentDate = new Date();
//   var birthDate = new Date(dateOfBirth);

//   var age = currentDate.getFullYear() - birthDate.getFullYear();
//   var monthDifference = currentDate.getMonth() - birthDate.getMonth();

//   if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   return age;
// }


// var dateOfBirth = "1990-05-15";
// var age = calculateAge(dateOfBirth);
// console.log("Age:", age);


// function repeatLetter(letter) {
//   var repeatedString = letter.repeat(10);
//   return repeatedString;
// }


// var letter = "a";
// var result = repeatLetter(letter);
// console.log("Repeated Letter:", result);


// // CHAPTER35-37END//


// // CHAPTER38//



// // function multiplyNumbers(a, b) {
// //   var result = a * b; 
// //   console.log("Result inside function:", result);
// // }


// // multiplyNumbers(5, 7);
// //  console.log("Result outside function:", result); 

// // var globalVariable = "Hello, World!";
// // function accessGlobalVariable() {
// //   console.log("Global variable inside function:", globalVariable);
// // }


// // accessGlobalVariable();

// // CHAPTER38END//


// // CHAPTER39-40START///


// // var fruit = "apple";

// // switch (fruit) {
// //   case "apple":
// //     console.log("Selected fruit: apple");
// //     console.log("Price: $1.00");
// //     break;

// //   case "banana":
// //     console.log("Selected fruit: banana");
// //     console.log("Price: $0.50");
// //     break;

// //   case "orange":
// //     console.log("Selected fruit: orange");
// //     console.log("Price: $0.75");
// //     break;

// //   default:
// //     console.log("Unknown fruit");
// //     break;
// // }

// var cityName = prompt("Enter a city name:");
// var message;

// switch (cityName.toLowerCase()) {
//   case "london":
//     message = "You entered London!";
//     break;

//   case "paris":
//     message = "You entered Paris!";
//     break;

//   case "new york":
//     message = "You entered New York!";
//     break;

//   default:
//     message = "City not recognized.";
//     break;
// }

// alert(message);
