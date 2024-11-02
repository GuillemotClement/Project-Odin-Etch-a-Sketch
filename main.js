const container = document.querySelector("#container");

/**
 * Création de la grille
 */
function getGrid(value){
    let nbRow = value;
    for (let i = 0; i < nbRow; i++){
        const row = document.createElement("div");
        container.appendChild(row);
        row.classList = "row";
        createRow(row, nbRow);
    }
}

/**
 * Création des carrés
 * @param row
 */
function createRow(row, value){
    for(let i = 0; i < value; i++){
        const square = document.createElement("div");
        square.classList = "square";
        row.appendChild(square);
    }
}


// ------------------------ SAISIE USER -------------------------------------------------------------------------------->
function getInput(){
    container.innerHTML = "";
    let isValid = false;
    while (!isValid){
        const value = prompt("Dimension ?");
        if(value < 20){
            getGrid(value);
            isValid = true;
        }else{
            alert("La grille est trop grande");
        }
    }
}

const button = document.querySelector("#inputBtn");

button.addEventListener("click", getInput);