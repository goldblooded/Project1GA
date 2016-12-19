console.log('classGame.js is connected');

class Game {
  constructor() {
    this.board = new Board();
    this.questionsRemaining = 5;
    this.selectedPerson = null;

    this.initQuestionHandlers();
    this.initCheckWin();
  }

  drawCard() {
    let tiles = this.board.tiles;
    let nPersons = tiles.length;
    let selectedIdx = Math.floor((Math.random()*100)) % nPersons;
    this.selectedPerson = tiles[selectedIdx];
  }

  answerQuestion(question) {
    let targetAttribute = question.targetAttribute;
    let targetValue = question.targetValue;
    let selectedPerson = this.selectedPerson;

    this.questionsRemaining--;

    if (this.questionsRemaining === 0) {
      alert('YOU LOST');
      window.location.reload();
    }
    else {
      if (selectedPerson[targetAttribute] && selectedPerson[targetAttribute] === targetValue) {
        alert('YES - YOU HAVE ' + this.questionsRemaining + ' Guesses Remaining');
      }
      else {
        alert('NO - YOU HAVE ' + this.questionsRemaining + ' Guesses Remaining');
      }
    }
  }

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

  initCheckWin() {
    let self = this;

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


  getQuestionById(id) {
    for (let i = 0; i < questions.length; i++) {
      if ((questions[i]).id === id) {
        return (questions[i])
      }
    }
  }

}

