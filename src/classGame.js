console.log('classGame.js is connected');

class Game {
  constructor() {
    this.board = new Board();    // initialize the game board
    this.questionsRemaining = 6; // player has 5 chances/questions when game starts
    this.selectedPerson = null;  // this will be the mystery rapper and be initialized in app.js with a call to drawCard()

    this.initQuestionHandlers();
    this.initCheckWin();
  }

  // drawCard will randomly select a rapper by computing a random
  // integer and then using that to index into the tiles array of the
  // Board class to set this.selectedPerson which represents rapper that
  // the user/player has to guess

  drawCard() {
    let tiles = this.board.tiles;
    let nPersons = tiles.length;
    let selectedIndex = Math.floor((Math.random()*100)) % nPersons;
    this.selectedPerson = tiles[selectedIndex];
  }

  // when the player has clicked on a question from the questions dropdown
  // the click handler will call this function to answer the selected question.
  answerQuestion(question) {
    let targetAttribute = question.targetAttribute;
    let targetValue = question.targetValue;
    let selectedPerson = this.selectedPerson;

    this.questionsRemaining--;

  // if the player has no more questions,  then they lost
    if (this.questionsRemaining === 0) {
      alert('YOU LOST');
      window.location.reload();
    }
    else {
      // if this.selectedPerson has the target value for the target attribute, then answer is YES
      // otherwise, NO
      if (selectedPerson[targetAttribute] && selectedPerson[targetAttribute] === targetValue) {
        alert('YES - YOU HAVE ' + this.questionsRemaining + ' Questions Remaining');
      }
      else {
        alert('NO - YOU HAVE ' + this.questionsRemaining + ' Questions Remaining');
      }
    }
  }

  // setup click handlers for each question in the dropdown list so that when the player clicks it,
  // a call to the function answerQuestion is made to answer whatever question was clicked
  initQuestionHandlers() {
    let self = this;

    for (let i = 0; i < questions.length; i++) {
      let selector = '#dropdown' + (i+1);
      let question = self.getQuestionById(selector);
      $(selector).html(question.question);
    }

    $('.js-dropdown').each(function() {
      $(this).on('click', function() {
        let id = '#' + this.id;
        let question = self.getQuestionById(id);
        self.answerQuestion(question);
      });
    });
  }

  // the player only gets one shot to declare who the mystery rapper is
  // so when the player clicks on a rapper from the rappers dropdown,
  // check if the chosed rapper's name is the same as the mystery rapper's name
  initCheckWin() {
    let self = this;
//stackoverflow.com/questions/337878/var-self-this
    $('.js-answer').each(function() {
      let name = $(this).text();
      $(this).on('click', function() {
        if (name === self.selectedPerson.name) {
          alert('YOU WON!');
        }
        else {
          alert('SORRY YOU GUESSED THE WRONG PERSON');
        }
      });
    });

  }

  // given an id (HTML), return the corresponding question object
  getQuestionById(id) {
    for (let i = 0; i < questions.length; i++) {
      if ((questions[i]).id === id) {
        return (questions[i])
      }
    }
  }

}

