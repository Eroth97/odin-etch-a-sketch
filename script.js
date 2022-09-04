let etchBox = document.getElementById('etch-box');

for(let j = 0; j < 16; j++){
    let row = document.createElement('div');
    for (let i = 0; i < 16; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('px-5');
        row.appendChild(newDiv);
    }
    etchBox.appendChild(row);
}