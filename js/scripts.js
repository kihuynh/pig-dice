//business


function Player (name, score, totalScore) {
  this.name = name;
  this.score = [];
  this.totalScore = [];
}

//var player1 = new Player("Bob");

Player.prototype.rollingDice = function() {
   var rollDice = Math.floor((Math.random()* (7-1) + 1));
   if (rollDice >= 2) {
   this.score.push(rollDice)
  } else {
    this.score = [];
     return console.log("Hold up, #1, switch player");
   }
};

Player.prototype.hold = function() {
    var a = this.score;
    var c = this.totalScore;
    var total = a.reduce(function (a, b) {
      return a + b ;
    });
      c.push(total);
      this.score=[];
};


// new player needs to be made.
// var bob = new Player("bob");
//bob.rollingDice();
//bob.score(); *it will hold all of the rollingDice numbers in array*

//
// Player.prototype.hold = function() {
//
// }
//
// $(document).ready(function() {
//
//
//
//   $("form#player-1").submit(function(event) {
//     event.preventDefault();
//     $("#nameButton").text();
//   });
//   $("#random").click(function(event) {
//     event.preventDefault();
//     // var number;
//     var player1 = new Player("Bob");
//
//     return Player.rollingDice(player1);
//     // alert(point);
//     // player1.score = point;
//     // console.log(player1.score);
//     // console.log(player1);
//     // $(".randomNumber").text(player1.score);
//     // var sum = Player.prototype.randomSum(point);
//     //$(".totalNumber").text(sum);
//   });
// });
