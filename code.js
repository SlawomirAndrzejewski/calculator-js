var oneBtn = document.getElementById("one");  //zmienne dla klawiszy numerycznych
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

var decimalBtn = document.getElementById("decimal");  //zmienne dla klawiszy funkcyjnych
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("backspace");
var displayValue = document.getElementById("display");

var display = "0";
var pendingVal;
var evalStringArray = [];

var numberBtns = document.getElementsByClassName("numbers");  // zmienne dla grup numerycznych i funkcyjnych
var operatorBtns = document.getElementsByClassName("operators");

var updateDisplayValue = (clickObject) => {  // funkcja, ktora czysci okienko z wynikiem i podaje cyfry
    var btnTxt = clickObject.target.innerText;

    if(display === "0") {
        display = "";
    }
    
    display += btnTxt;
    displayValue.innerText = display;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case "+":
            pendingVal = display;
            display = "0";
            displayValue.innerText = display;
            evalStringArray.push(pendingVal);
            evalStringArray.push("+");
            break;

        case "-":
            pendingVal = display;
            display = "0";
            displayValue.innerText = display;
            evalStringArray.push(pendingVal);
            evalStringArray.push("-");
            break;

        case "x":
            pendingVal = display;
            display = "0";
            displayValue.innerText = display;
            evalStringArray.push(pendingVal);
            evalStringArray.push("*");
            break;

        case "/":
            pendingVal = display;
            display = "0";
            displayValue.innerText = display;
            evalStringArray.push(pendingVal);
            evalStringArray.push("/");
            break;

        case "=":
            evalStringArray.push(display);
            var evaluation = eval(evalStringArray.join(" "));
            display = evaluation + "";
            displayValue.innerText = display;
            evalStringArray = [];
    }
}

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", updateDisplayValue, false)
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", performOperation, false)
}

clearBtn.onclick = () => {  // kasowanie wyniku
    display = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValue.innerHTML = display;
}

backspaceBtn.onclick = () => {  // dzialanie przycisku backspace
    let lengthOfDisplayVal = display.length;
    display = display.slice(0, lengthOfDisplayVal - 1);

    if(display === "") 
        display = "0";

    displayValue.innerText = display;
}

decimalBtn.onclick = () => { // dodatkowa funkcjonalność żeby kropka pojawiała się tylko raz
    if(!display.includes('.')) 
        display = display + '.';

     displayValue.innerText = display;
}
