function clr() {
  var getinp = document.getElementById("inp");
  getinp.value = "";
}

function calc(hlo) {
  let getinp = document.getElementById("inp");
  lastnum = getinp.value.slice(-1);
  if (
    (lastnum === "*" ||
      lastnum === "/" ||
      lastnum === "%" ||
      lastnum === "+" ||
      lastnum === "-") &&
    (hlo === "*" || hlo === "+" || hlo === "%" || hlo === "-")
  ) {
    return 2;
  }
  getinp.value += hlo;
}

function equal() {
  var equal = document.getElementById("inp");
  equal.value = eval(equal.value);
}

function clear() {
  var getinp = document.getElementById("inp");
  getinp.value = getinp.value.slice(0, -1);
}
