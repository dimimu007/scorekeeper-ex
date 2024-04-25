/*
  // Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
 alert("Come back once you're out of the womb");
}

// If age is 21  
if(age === 21) {
 alert("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
else if(age % 2 !== 0) {
 alert("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}


var number = Number(prompt("guess a number!"));

if(number===7) {
    alert("you guessed right");
}
else if(number<7) {
    alert("you guessed to low");
}
else {
    alert("you guessed to low");
}




var num = 10;

while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num += 1;
}

var num = 300;

while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

var num = 5;

while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}




var answer = prompt("are we there yet");

while (answer !== "yes") {
  var answer = prompt("no we arent");
}

alert("yay, we made it");




function isEven(num) {
  if (num % 2 === 0) {
    return "num" + "" + "is even";
  }
  return "num" + "" + "is odd";
}
isEven(9);

function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1

function kebabToSnake(str) {
  //replace all '-' with "_"'s
  var newStr = str.replace(/-/g, "_");
  //return str
  return newStr;
}
*/

/*var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input.indexOf("quit") === -1) {
  //handle input
  if (input.indexOf("list") >= 0) {
    printList();
  } else if (input.indexOf("new") >= 0) {
    addTodo();
  } else if (input.indexOf("delete") >= 0) {
    deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
alert("OK, YOU QUIT THE APP");

function printList() {
  alert("**********");
  todos.forEach(function (todo, index) {
    alert(index + ": " + todo);
  });
  alert("**********");
}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  alert(newTodo + " added to list");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  alert("Todo Removed");
}
*/

/*
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3, 6, 2, 5]);

//*** isUniform() ***

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// *** sumArray() ***

function sumArray(arr) {
  var total = 0;
  arr.forEach(function (element) {
    total += element;
  });
  return total;
}

// *** max() ***

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
*/

var button = document.querySelector("button");


button.addEventListener("click", function () {
  button.classList.toggle("purple");
  document.body.classList.toggle("purple");
});
