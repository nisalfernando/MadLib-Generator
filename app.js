// Pi = 4/1 - 4/3 + 4/5 - 4/7...

function calcPI(iterations) {
  let pi = 0,
    divisor = 1;
  for (i = 0; i <= iterations; i++) {
    pi = pi + 4 / divisor - 4 / (divisor + 2);
    divisor += 4;
  }
  document.getElementById("output").value = pi.toFixed(10);
}

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

let fibList = [];
function getFibList(howMany) {
  for (i = 0; i < howMany; i++) {
    fibList[i] = fib(i);
  }
  fibList[i] = shift();
  document.getElementById("output1").value = fibList.join(", ");
}

function fib(whichNum) {
  let num1 = 1,
    num2 = 0,
    temp,
    i = 0;
}
