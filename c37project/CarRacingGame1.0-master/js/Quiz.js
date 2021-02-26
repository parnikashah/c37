class quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new  Contestant();
      var  contestantcountRef = await database.ref('contestantcount').once("value");
      if(contestantcountRef.exists()){
        contestantcount =contestantcountRef.val();
        contestant.getCount();
      }
    //  question= new question()
      question.display();
    }
  }

  play(){
   question.hide();
    textSize(30);
    text("Result Of Quiz", 350, 50);
    Contestant.getcontestantInfo();

    if(allcontestants !== undefined){
      var display_answer = 250;
      for(var plr in allcontestants){
        var correctOption="1";
        if (correctOption === allcontestants[plr].answer)
          fill("Green")
        else
          fill("Red");

        display_answer+=20;
        textSize(15);
        text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 200,display_answer)
      }
    }

    
  }
}
