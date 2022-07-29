//
let color = "black";
let click = "true";
function populateBoard (size)
{
        let table = document.querySelector(".table")
        //loop to remove all divs 
        let squares = table.querySelectorAll("div");
        squares.forEach((div) => div.remove());
        //create all divs
        table.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        table.style.gridTemplateRows = `repeat(${size} , 1fr)`;

        let amount = size * size;
        for(let i=0; i < amount; i++)
        {
                let square = document.createElement("div");
                //function to color divs
                square.addEventListener("mouseover", colorSquare);

                square.style.backgroundColor = "white";
                table.insertAdjacentElement("beforeend",square);
        }
}
populateBoard(48);

function changeSize (input)
{
        if (input >=2 && input <=100)
        {
                populateBoard(input);
        }
        else {console.log("too many squares")}
}

function colorSquare()
{
        if (click)
        {
                if (color === "random")
                {
                this.style.backgroundColor = `hsl(${Math.random()* 360},100%,50%)`;
                }
                else 
                {
                 //set the bg-color to black , black will be your default color while using UI         
                this.style.backgroundColor = color;          
                }
        }
        
        
}

function changeColor(choice)
{
        //when this func its called variable color will change, so color will be gray, rainbow , white,..etc. 
        //thus colorSquare func will be call and will change the bg-color
        color = choice;
}
function resetBoard()
{
        let table = document.querySelector(".table");
        let squares = table.querySelectorAll("div");
        squares.forEach((div) => div.style.backgroundColor="white");
        
        
}
document.querySelector("body").addEventListener("click", () => {
        click = !click;
});