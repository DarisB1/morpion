const squares = document.querySelector(".div-total");

function game() {
  for (let i = 0; i < 3; i++) {
    const divBox = document.createElement("div");
  squares.appendChild(divBox);
    for (let j = 0; j < 3; j++) {
      const btn = document.createElement("button");
      divBox.appendChild(btn);
      btn.classList.add('btns')
    }
  }
}
game();

const allBtn = document.querySelectorAll("button");

let player = true;
let x = "x";
let o = "o";
let nombreModulo = 0;

function modulo() {
  

  nombreModulo++ 
}

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


for (let i = 0; i < allBtn.length ; i++) {
  allBtn[i].addEventListener("click", ()=> {
    if (i < 3) {
      board[0][i] = 'x';
    }
    if(i > 2 && i < 6){
      board[1][i - 3] = 'x';
    }

    if(i > 5){
      board[2][i - 6] = 'x';
    }
    console.log(board);
    
  });
}