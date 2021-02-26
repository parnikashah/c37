var canvas, backgroundImage;

var gameState = 0;
var contestantcount;
var allcontestants;
var answer;
var database;
var contestant;

var form, player, game;



function setup(){
  canvas = createCanvas(900,400);
  database = firebase.database();
  question=new question();
  quiz = new quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestantcount === 4){
   quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
