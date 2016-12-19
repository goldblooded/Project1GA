console.log('classBoard.js is connected');

class Board {
  constructor() {
    this.tiles = [];
    // initializes the tiles on the board by:
    //    * creating a new Person object and putting it into the tiles array
    //    * setting the src attribute on the img tag to show the picture
    //    * setting up a click handler for each tile so that clicking on a tile will toggle its opacity
    for (let i = 0; i < persons.length; i++) {
      let selector = "#square" + (i+1);
      let person = new Person(persons[i], selector);
      this.tiles.push(person);
      let path = person.path;
      $(selector).attr('src', path);
      $(selector).on('click', this.eliminatePerson);
    }
  }

  // given a rapper's name, get the person object corresponding to that name
  getPersonByName(name) {
    let tiles = this.tiles;
    for (let i = 0; i < tiles.length; i++) {
      let person = (tiles[i]);
      if (person.name === name) {
        return person;
      }
    }
  }

  eliminatePerson() {
    let id = this.id;
    let selector = '#' + id;

    if ($(selector).css('opacity') === '1') {
      $(selector).css('opacity', '0.3');
    }
    else {
      $(selector).css('opacity', '1');
    }
  }
}

