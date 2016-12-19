console.log('game.js is connected');

const questions = [
  {
    question: 'Are they bald?',
    targetAttribute: 'hairType',
    targetValue: 'bald'
  },
  {
    question: 'Does cash rule everything around them?',
    targetAttribute: 'cashRules',
    targetValue: true
  },
  {
    question: 'Are they female?',
    targetAttribute: 'gender',
    targetValue: 'female'
  },
  {
    question: 'Are they wearing a chain?',
    targetAttribute: 'chain',
    targetValue: true
  },
  {
    question: 'Are they wearing glasses?',
    targetAttribute: 'glasses',
    targetValue: true
  },
  {
    question: 'Have they ever been vegan?',
    targetAttribute: 'vegan',
    targetValue: true
  },
  {
    question: 'Have they been on a reality show?',
    targetAttribute: 'realityShow',
    targetValue: true
  },
  {
    question: 'Are they a platnium selling artist?',
    targetAttribute: 'platnium',
    targetValue: true
  },
  {
    question: 'Is their net worth over 100mil?',
    targetAttribute: 'netWorth',
    targetValue: true
  },
  {
    question: 'Have they worked with Timbaland?',
    targetAttribute: 'timbaland',
    targetValue: true
  },
  {
    question: 'Before going solo, were they in a group?',
    targetAttribute: 'group',
    targetValue: true
  },
  {
    question: 'Are they based on the West Coast?',
    targetAttribute: 'westCoast',
    targetValue: true
  },
  {
    question: 'Are they wearing a hat?',
    targetAttribute: 'hat',
    targetValue: true
  },
  {
    question: 'Is their money so tall their Barbie has to climb it',
    targetAttribute: 'barbie',
    targetValue: true
  },
  {
    question: 'Are they retired?',
    targetAttribute: 'retired',
    targetValue: true
  },
  {
    question: 'Do they look angry?',
    targetAttribute: 'angry',
    targetValue: true
  },
  {
    question: 'Have they had beef with Drake?',
    targetAttribute: 'hadbeefwithDrake',
    targetValue: true
  },
  {
    question: 'Are they younger than 30?',
    targetAttribute: 'isYoungerthan30',
    targetValue: true,
  },
  {
    question: 'Is their music terrible?',
    targetAttribute: 'music',
    targetValue: true,
  },
  {
    question: 'Are they in black and white?',
    targetAttribute: 'black and white',
    targetValue: true,
  }
];


$(document).ready(function() {
  assignIdsToQuestions();
  initDropdowns();
  initAnswerInputForm();
  console.log(JSON.stringify(questions, null, 2));
  let game = new Game();
  game.drawCard();
  console.log(JSON.stringify(game.selectedPerson, null, 2));
});



function dropdownHandler() {
    $('#question-dropdown').toggle("show");
}


function questionFilterFunction() {
  let input, filter, ul, li, a, i;
  filter = $('#question-input').val().toUpperCase();
  li = $('#question-dropdown li');
  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function peopleFilterFunction() {
  let filter = $('#myPerson').val().toUpperCase();
  let li = $('.people-dropdown-content li');

  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function initDropdowns() {
  $('#question-button').on('click', dropdownHandler);
  $('#question-input').on('keyup',questionFilterFunction);
  $('#myPerson').on('keyup',peopleFilterFunction);
}


function assignIdsToQuestions() {
  for (let i = 0; i < questions.length; i++) {
    (questions[i]).id = '#dropdown' + (i+1);
  }
}


function initAnswerInputForm() {
  for (let i =  0; i < persons.length; i++) {
    let person = (persons[i]);
    let name = person.name;
    $('.people-dropdown-content').append('<li class=\"js-answer\">' + name + '</li>');
  }

  $('#myPerson').on('click', function() {
    $('.people-dropdown-content').toggle('show');
  });
}
