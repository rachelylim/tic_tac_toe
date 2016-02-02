// player O 
// player X 
// place things in the right spot 
// keep track of which player is playing
// UI draggable 

// when you click on a spot, if it is playerO, place an O
// if player O just played, player X is playing 

 


$( document ).ready(function() {

  var turn = true; 

var playerO= { 
  play: function(spot){ 
    $(spot).html("O");
  },
  positions: [],
};

var playerX = { 
  play: function(spot){ 
    $(spot).html("X");
  },
  positions: [],
};

var checkWinner = function(playerPositions){
  var player = playerPositions.sort().toString(); 
  // debugger;

  winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

  var won = false;
  for(var i = 0; i < winningCombos.length; i++){
    // console.log(winningCombos[i].map(Number));

    if (player.includes((winningCombos[i].map(Number)))){
      won = true;
    };
  };
  return won;
};

var clearBoard = function() {
  $("td").empty();
  playerO.positions = []
  playerX.positions = []
}

  $("td").click(function(){
    if (turn === true) {
      var id = $(this).attr("id"); 
      playerO.play(this);
      playerO.positions.push(id);
      turn = false;
      // debugger
      if (checkWinner(playerO.positions)){
        console.log(playerO.positions);
        alert("Player O has won!");

        clearBoard();
      };
    } else if (turn === false) {
      var id = $(this).attr("id");
      playerX.play(this);
      playerX.positions.push(id);
      turn = true; 
      if (checkWinner(playerX.positions)){
        alert("Player X has won!");

        clearBoard();
      };
    };
  });
});

//determine if there is a winner 
//if there are 3 xs in a row or diagonal
// if there are 3 Os in a row or diagonal

// check if there are at least 3 xs or os 
// check if xs or os are in a row 
// check if xs or os are diagonal 

// click on an id 
// hash, key: 0 or a 1 
// if value is an O, key: 0 
// if value is an X, key: 1

// if at any time you have 3 ones,
