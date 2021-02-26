class question {

  constructor() {
    this.input1 = createInput("Name");
    this.input2 = createInput("Enter the correct option");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }
  hide(){
    this.button.hide();
    this.input1.hide();
    this.input2.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("My Quiz Game");
    title.position(350, 0);
    this.question.html("THE FIRST METAL USED BY HUMANS ")
    this.question.position(150,100);
    this.option1.html("1.Copper ");
    this.option1.position(150,130);
    this.option2.html("2.Iron ");
    this.option2.position(150,160);
    this.option3.html("3.Bronze ");
    this.option3.position(150,190);
    this.option4.html("4.Aluminium ");
    this.option4.position(150,220);

    this.input1.position(200, 300);
    this.input2.position(400, 300);
    this.button.position(450, 350);

    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer=this.input2.value();
      contestantcount+=1;

      contestant.index = contestantcount;
      contestant.update();
      contestant.updateCount(contestantcount);
    });

  }
}
