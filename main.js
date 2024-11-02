const container = document.querySelector("#container");


function getGrid(){
    let nbRow = 16;

    for (let i = 0; i < nbRow; i++){
        const row = document.createElement("div");
        container.appendChild(row);
        row.classList = "row";
        createRow(row);
    }
}

function createRow(row){
    let nbSquare = 16;
    for(let i = 0; i < 16; i++){
        const square = document.createElement("div");
        square.classList = "square";
        row.appendChild(square);
    }
}

getGrid();
