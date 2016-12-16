console.log('classBoard.js is connected');

class Board {
  constructor() {
    this.tiles = [];
    for(let i = 0; i < persons.length; i++) {
      let person = new Person(persons[i]);
      this.tiles.push(person);
      let selector = "#square" + (i+1);
      let path = person.path;
      $(selector).attr('src', path);
      // http://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
      $(selector).on('click', this.eliminatePerson);
      // document.querySelector(selector).addEventListener("click", this.eliminatePerson)
    }
  }
  eliminatePerson() {
    alert('elimination placeholder');
  }
}



