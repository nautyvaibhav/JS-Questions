/*
============================================

                SUDOKU SOLVER
                
============================================

*/


let sudokuArray = [
   [],[] //till 9
];

//positions as string
function sudokuSolver(data, positions) {
    let fit = false;
    //extracting positions 
    let positionArray = positions.split('').map((position) => Number(position))

    //checking if the number isnt present in the row and 3*3 sub matrix
    if (!getElementsInRow(positionArray[0]).includes(data) && checkInVicinity3(positionArray[0], positionArray[1],data)) {
        fit = true;
        sudokuArray[positionArray[0], positionArray[1]] = data;
    }

    //checking if the number isnt present in the col and 3*3 sub matrix
    if (!getElementsInCol(positionArray[1]).includes(data) && checkInVicinity3(positionArray[0], positionArray[1],data)) {
        fit = true;
        sudokuArray[positionArray[0], positionArray[1]] = data;
    }
    return fit;

}

function getElementsInRow(row) {
    let arrayRowElements = [];
    for (let col = 0; col < 9; col++) {
        arrayRowElements.push(sudokuArray[row][col]);
    }
    return arrayRowElements;
}

function getElementsInCol(col) {
    let arrayColElements = [];
    for (let row = 0; row < 9; row++) {
        arrayColElements.push(sudokuArray[row][col]);
    }
    return arrayColElements;
}

function checkInVicinity3(row, col, data) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!sudokuArray[i + row][j + col] === data) {
                return true;
            }
        }
    }
}


// calling function with the data
let check=sudokuSolver(3, "67");
if(check){
    console.log(`added at the given position`);

}
else{
    console.log(`can't add to the given position, find other place to add it` );
}