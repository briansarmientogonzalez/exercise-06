// JSON JavaScript Object Notation

let students = [
    { name: "Izan", age: 67 }, 
    { name: "Dario",age: 123 },
    { name: "Izan", age: 3 }, 
    { name: "Dario",age: 4 },
];

function listenOnParagraph(){
    
}





function listenOnParagraph(){
    const myParagraphElement = document.getElementById("my-paragraph");
    myParagraphElement.addEventListener("click", changeColor);
}


function changeColor(){
    console.log("Alguien ha hecho click sobre el parrafo")
    const myParagraphElement = document.getElementById("my-paragraph");
    myParagraphElement.style.backgroundColor = "blue"
}


function listenOnDissapearingDiv(){
    const dissapearingDivElement = document.getElementById("dissapearing-div");
    dissapearingDivElement.addEventListener("click", makeItDissapear);
}


function makeItDissapear(){
    const dissapearingDivElement = document.getElementById("dissapearing-div");
    dissapearingDivElement.style.display = "none";
}


function listenOnIsGoingToGrow(){
    const isGoingToGrowElement = document.getElementById("is-going-to-grow");
     isGoingToGrowElement.addEventListener("click", makeItGrow);
}


function makeItGrow(){
    const isGoingToGrowElement = document.getElementById("is-going-to-grow");
    isGoingToGrowElement.style.transform = "scale(2)";
}

function listenOnExitOrEnter(){
    const exitOrEnterElement = document.getElementById("exit-or-enter");
    exitOrEnterElement.addEventListener("click", changeText);
}


function changeText(){
    const exitOrEnterElement = document.getElementById("exit-or-enter");
    const actualValue = exitOrEnterElement.innerText;
    if(actualValue == "Entrada") {
       exitOrEnterElement.innerText = "Salida";
       return;
    }

    exitOrEnterElement.innerText = "Entrada";
}


listenOnParagraph();
listenOnDissapearingDiv();
listenOnIsGoingToGrow();
listenOnExitOrEnter();