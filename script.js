let etchBox = document.getElementById('etch-box');

//Make the initial etch box of 50 squares and add hovering.
makeSquares(50);
blackHover();

//Create the event listener for our button to invoke the makeSquares function.
let selection = document.getElementById('select');
selection.addEventListener('click', () => {
    //Use this code to get a number from the user. 
    let numberID = document.getElementById('number');
    let number = Number(numberID.value);

    deleteSquares();
    makeSquares(number);
    blackHover();
})



//Put this code on a function to activate the hovering.
function blackHover(){
    let iterator = document.querySelectorAll('.new-div');

    iterator.forEach( (element) =>{
        element.addEventListener('mouseover', (event) =>{
            element.style.backgroundColor = 'black';
        })
    })
}


//This function fill the Etch a Sketch box with squares.
function makeSquares(squares){
    let squaresSize = 500/squares;

    // console.log(squaresSize);
    // console.log(squares);

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