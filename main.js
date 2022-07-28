function populateBoard (size){
let table = document.querySelector(".table")
table.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
table.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
for(let i=0; i < amount; i++){
        let square = document.createElement("div");
        //
        square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "blue";
        table.insertAdjacentElement("beforeend",square);
}
}
populateBoard(16);

function changeSize (input){
        if (input >=2 && input <=100){
                populateBoard(input);
        }
        else {
                console.log("too many squares")
        }
        

}