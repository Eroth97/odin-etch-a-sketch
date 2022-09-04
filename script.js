let etchBox = document.getElementById('etch-box');

//Use this code to get a number from the user. 
// let number = document.getElementById('number');

//Create a button with an event listener to invoke the makeSquares function.
makeSquares(50);


//Put this code on a function to activate the hovering.
let iterator = document.querySelectorAll('.new-div');

iterator.forEach( (element) =>{
    element.addEventListener('mouseover', (event) =>{
        element.style.backgroundColor = 'black';
    })
})



//This function would fill the Etch a Sketch box with squares.
function makeSquares(squares){
    let squaresSize = 500/squares;

    console.log(squaresSize);
    console.log(squares);

    for(let j = 0; j < squares; j++){
        let row = document.createElement('div');
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

