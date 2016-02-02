var turn = true; 

var playerO= { 
  play: function(spot){ 
    $(spot).html('<img src="red.png" alt="O" />');
  },
  positions: [],
};

var playerX = { 
  play: function(spot){ 
    $(spot).html('<img src="green.png" alt="X" />');
  },
  positions: [],
};

var checkWinner = function(playerPositions){
  var player = playerPositions.sort().toString(); 

  winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

  var won = false;
  for(var i = 0; i < winningCombos.length; i++){
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

var declareWinner = function(player) {
  // alert(player)
  var message = player + " wins!"
  $(".overlay").fadeIn("slow");
  $("#alert").html(message);
  $("#alert").show();
}

$( document ).ready(function() {
  $("td").click(function(){
    if (turn === true) {
      var id = $(this).attr("id"); 
      playerO.play(this);
      playerO.positions.push(id);
      turn = false;
      if (checkWinner(playerO.positions)){
        declareWinner("Pink Flower");
      };
    } else {
      var id = $(this).attr("id");
      playerX.play(this);
      playerX.positions.push(id);
      turn = true; 
      if (checkWinner(playerX.positions)){
        declareWinner("Green Flower");
      };
    };
  });

  $(".overlay").click(function() {
    $(this).fadeOut("slow");
    $("#alert").hide();
    clearBoard();
  });

});
