var turn = true; 

var playerO= { 
  play: function(spot){ 
    $(spot).html('<img src="red.png" alt="O" />');
  },
  positions: [],
  nickname: "Pink Flower"
};

var playerX = { 
  play: function(spot){ 
    $(spot).html('<img src="green.png" alt="X" />');
  },
  positions: [],
  nickname: "Green Flower"
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

var fullPlay = function(clickedSpot, player) {
  var id = $(clickedSpot).attr("id");
  player.play(clickedSpot);
  player.positions.push(id);
  if(checkWinner(player.positions)){
    declareWinner(player.nickname)
  };
}

var isEmpty = function(element) {
  return !$.trim(element.html());
}

$( document ).ready(function() {
  $("td").click(function(){
    var _this = this;

    // debugger

    if (turn === true && isEmpty($(this))) {
      turn = false;
      fullPlay(_this, playerO);
    } else if (turn === false && isEmpty($(this))) {
      turn = true;
      fullPlay(_this, playerX);
    };
  });

  $(".overlay").click(function() {
    $(this).fadeOut("slow");
    $("#alert").hide();
    clearBoard();
  });

});
