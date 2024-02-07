//Calculate and print the sum of numbers from 1 to 10.
const number = 10;
let sum = 0,
  i = 1;
while (i <= number) {
  sum += i;
  i++;
  //   console.log(sum);
  document.getElementById("sumOfNumber").innerHTML =
    "sum of number from 1 to 10 is:  " + sum;
}

//Print all even numbers between 1 and 20.
let j = "";
for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    j = j + i + "<br>";
    document.getElementById("printEvenNumber").innerHTML =
      "All even numbers from 1 to 20 is: " + j;
    // console.log(j);
  }
}

// Print numbers from 10 to 1 in reverse order.
let y = "";
for (var x = 10; x >= 1; x--) {
  y = y + x + "<br>";
  console.log(i);
  document.getElementById("printReverseNumber").innerHTML =
    "Number is reverse order from 1 to 10: " + y;
}

// Generate the multiplication table of a number entered by the user.
function table() {
  let num = parseInt(
    prompt("Enter a number to generate its multiplication table:")
  );
  if (isNaN(num)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    console.log(`Multiplication Table of ${num}:`);
    let d = "";
    for (let i = 1; i <= 10; i++) {
      d = d + num * i + "<br>";
      document.getElementById("table").innerHTML =
        "the multiplication of " + num + " is :" + " <br> " + d;
      // console.log(d);
    }
  }
}
