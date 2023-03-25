var screen = document.getElementById("screen");
var gen = document.getElementById("generate");
var output = document.getElementById("codeOutput");
var number0 = document.getElementById("number0");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");
var number5 = document.getElementById("number5");
var number6 = document.getElementById("number6");
var number7 = document.getElementById("number7");
var number8 = document.getElementById("number8");
var number9 = document.getElementById("number9");
var message = document.getElementById("message");
var enter = document.getElementById("enter");
var reset = document.getElementById("reset");
var form = document.getElementById("myForm");

var innertext = "";

reset.addEventListener("click", function () {
  output.innerHTML = " ";
  message.innerHTML = " ";
});
function generateCode() {
  var code;
  code = Math.floor(100000 + Math.random() * 900000);
  screen.innerHTML = code;
}
gen.addEventListener("click", generateCode);

number0.addEventListener("click", function () {
  output.innerHTML += number0.value;
  innertext += number0.value;
});
number1.addEventListener("click", function () {
  output.innerHTML += number1.value;
  innertext += number1.value;
});
number2.addEventListener("click", function () {
  output.innerHTML += number2.value;
  innertext += number2.value;
});

number3.addEventListener("click", function () {
  output.innerHTML += number3.value;
  innertext += number3.value;
});
number4.addEventListener("click", function () {
  output.innerHTML += number4.value;
  innertext += number4.value;
});
number5.addEventListener("click", function () {
  output.innerHTML += number5.value;
  innertext += number5.value;
});
number6.addEventListener("click", function () {
  output.innerHTML += number6.value;
  innertext += number6.value;
});
number7.addEventListener("click", function () {
  output.innerHTML += number7.value;
  innertext += number7.value;
});
number8.addEventListener("click", function () {
  output.innerHTML += number8.value;
  innertext += number8.value;
});
number9.addEventListener("click", function () {
  output.innerHTML += number9.value;
  innertext += number9.value;
});

function checkCode() {
  console.log(innertext);
  if (innertext == screen.innerHTML) {
    message.innerHTML = "The code you entered is correct";
  } else {
    message.innerHTML = "The code you entered is incorrect";
  }
  innertext = "";
}
enter.addEventListener("click", checkCode);
