const btnNum = document.querySelectorAll(".btn--num");
const displayScreen = document.querySelector("#displayScreen");
const operators = document.querySelectorAll(".btn--sign");

var result;
var num;
let operant = false;
console.log(operators[0].innerText);
console.log(operators[1].innerText);
console.log(operators[2].innerText);
console.log(operators[3].innerText);
console.log(operators[4].innerText);





btnNum[0].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>0</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[1].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>1</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>1</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[2].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>2</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>2</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[3].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>3</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>3</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[4].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>4</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>4</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[5].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>5</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>5</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[6].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>6</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>6</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[7].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>7</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>7</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[8].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>8</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>8</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[9].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>9</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>9</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[10].addEventListener('click',function () {
    if (displayScreen.innerText.includes(",")) {
        
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>,</h2>";
        // console.log(displayScreen.innerText);
    }
});

operators[0].addEventListener('click',() => {
    // if (operant) {
    //     result = undefined;
    //     operant = false;
    // }
    operant = true;
    num = Number(displayScreen.innerText);
    if (result === undefined) {
        result = num;
        console.log(num);
    } else {
        if (result === 0) {
            num = undefined;
            displayScreen.innerHTML = `<h2 style='display:inline;'>Error</h2>`;
        }else{
            result = Number(result) / num;
            console.log(result);
            displayScreen.innerHTML = `<h2 style='display:inline;'>${result}</h2>`;
            
            
        }
        
    }
});
operators[1].addEventListener('click',() => {
    
    operant = true;
    num = Number(displayScreen.innerText);
    if (result === undefined) {
        result = num;
    } else {
      
        result = Number(result)*num;
        console.log(result);
        displayScreen.innerHTML = `<h2 style='display:inline;'>${result}</h2>`;
        result = undefined;
        
    }
});