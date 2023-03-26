const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");

let calc = (number) => {
  calcScreen.value = calcScreen.value + number;
};

function btnCalc() {
  // denna funktion tar hand om beräkningen
  /* your code here */
  sum = result;

  elemCalcScreen.innerHTML = sum; // show the result on screen
}

function addDigit(thisSign) {
  // lägg till siffra
  elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() {
  // ta bort
  let calcScreen = elemCalcScreen.innerHTML;
  calcScreen = calcScreen.slice(0, -1);
  elemCalcScreen.innerHTML = calcScreen;
}

function btnConvertToDollar() {
  // This is for the button that convert sum to dollar. The if sats makes if you right something rong and a NaN whode com up but now ERROR coms up.
  let x = elemCalcScreen.innerHTML;

  let sum = 0;

  sum = x / 11.1;
  sum = sum.toFixed(2);

  if (isNaN(sum)) {
    elemCalcScreen.innerHTML = "ERROR";
  } else {
    elemCalcScreen.innerHTML = sum;
  }
}

function btnConvertToEuro() {
  // This is for the button that convert sum to Euro. The if sats makes if you right something rong and a NaN whode com up but now ERROR coms up.
  let x = elemCalcScreen.innerHTML;

  let sum = 0;

  sum = x / 10.9;

  sum = sum.toFixed(2);

  if (isNaN(sum)) {
    elemCalcScreen.innerHTML = "ERROR";
  } else {
    elemCalcScreen.innerHTML = sum;
  }
}

function btnClearAll() {
  // This button is the Clear all. So when you press AC it clear the screen.
  let x = (calcScreen = elemCalcScreen.innerHTML);

  calcScreen = "";

  elemCalcScreen.innerHTML = calcScreen;
}

let btnTime = document.getElementById("btnTime");

btnTime.addEventListener("click", () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  elemCalcScreen.innerHTML = currentDate;

  console.log(date.getMilliseconds());
});
