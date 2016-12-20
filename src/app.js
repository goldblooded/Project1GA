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

 //creates new Game
 //learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
  assignIdsToQuestions();
  initDropdowns();
  initAnswerInputForm();
  let game = new Game();
  //randomly select a rapper who the user will have to guess
  game.drawCard();
  console.log();
});

//api.jquery.com/toggle/
// dropdownHandler will display the questions dropdown on first click
// and hide it on second click
function dropdownHandler() {
    $('#question-dropdown').toggle("show");
}

//stackoverflow.com/questions/2813166/help-with-this-val-touppercase
// questionFilterFunction gets the user input from the input box and
// searches through the list of items in the dropdown for all matches
function questionFilterFunction() {
  // targets the input box and gets the text the user entered and change it to uppercase
  let filter = $('#question-input').val().toUpperCase();
    // loop through the questions in the dropdown and see if anything
  // matches the text the user entered
  // if we have any matches, then show the matched question
  // otherwise dont show anything
  let li = $('#question-dropdown li');
  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// peopleFilterFunction implements the same logic as question filter
// function EXCEPT that now we try to match the user's input against
// the list of rappers
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

// Sets up the following event handlers:
//  * for the question button: on click show questions dropdown  by calling dropdownHandler
//  * for the search question input: on keyup filter through dropdowns depending on what the user has entered into the input by calling questionFilterFunction
//  * for the make guess input: on keyup filter through list of rappers depending on what text the user has entered so far
function initDropdowns() {
  $('#question-button').on('click', dropdownHandler);
  $('#question-input').on('keyup',questionFilterFunction);
  $('#myPerson').on('keyup',peopleFilterFunction);
//stackoverflow.com/questions/19022396/drop-down-to-set-initialize-value-using-jquery
// other resources used for initializing clickhanders but cannot find them at the moment!


// loop through questions array and add an id attribute so that we can
// associate that id with the respective id in the HTML
function assignIdsToQuestions() {
  for (let i = 0; i < questions.length; i++) {
    (questions[i]).id = '#dropdown' + (i+1);
  }
}

// populate the list of rappers for the make guess dropdown and setup a
// click handler so that clicking on the input box shows full dropdown list
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
