//Get the elements that make our functionality work.
let etchBox = document.getElementById('etch-box');
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');

//Make the initial etch box of 50 squares and add black hovering.
makeSquares(50);
blackHover();


//This functionality makes possible to change how the user paints without having
//to change the grid size.
black.addEventListener('click', () => {
    blackHover();
})

rainbow.addEventListener('click', () => {
    rainbowHover();
})


//Create the event listener for our button to invoke the makeSquares function.
let selection = document.getElementById('select');
selection.addEventListener('click', () => {
    //Use this code to get a number from the user. 
    let numberID = document.getElementById('number');
    let number = Number(numberID.value);

    //The etch box has to be colored as the user wanted.
    if (rainbow.checked){
        deleteSquares();
        makeSquares(number);
        rainbowHover();
    } else {
        deleteSquares();
        makeSquares(number);
        blackHover();
    }
})


//This function fill the Etch a Sketch box with squares.
function makeSquares(squares){
    let squaresSize = 500/squares;

    for(let j = 0; j < squares; j++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < squares; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('new-div');
            newDiv.style.height = `${squaresSize}px`;
            newDiv.style.width = `${squaresSize}px`;
            row.appendChild(newDiv);
        }
        etchBox.appendChild(row);
    }
}

//This function deletes all old squares.
function deleteSquares(){
    let rows = document.querySelectorAll('.row');
    rows.forEach( (element) => {
        etchBox.removeChild(element);
    })
}


//Hovering functions.
function blackHover(){
    let iterator = document.querySelectorAll('.new-div');

    iterator.forEach( (element) =>{
        element.addEventListener('mouseover', (event) =>{
            element.style.backgroundColor = 'black';
        })
    })
}

function rainbowHover(){
    let iterator = document.querySelectorAll('.new-div');

    iterator.forEach( (element) =>{
        element.addEventListener('mouseover', (event) =>{
            let arrayColors = aleatoryColorsArray()
            element.style.backgroundColor = `rgb(${arrayColors[0]}, ${arrayColors[1]}, ${arrayColors[2]})`;
        })
    })
}

//This function returns an array with three aleatory numbers
//they can be use to change the desired color.
function aleatoryColorsArray(){
    let randomNumberR = Math.trunc(255*Math.random());
    let randomNumberG = Math.trunc(255*Math.random()); 
    let randomNumberB = Math.trunc(255*Math.random());

    return [randomNumberR, randomNumberG, randomNumberB];
}