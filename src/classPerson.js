console.log('classPerson.js is connected');

const persons = [
  {
    name: 'Alice',
    hairType: 'curly',
    hairColor: 'brown',
    age: 50,
    glasses: true,
    gender: 'female',
    image: 'images/Alice.jpg'
  },
  {
    name: 'Jason',
    hairType: 'curly',
    hairColor: 'black',
    age: '34',
    glasses: false,
    gender: 'male',
    image: 'images/Jason.jpg'
  },
  {
    name: 'Donovan',
    hairType: 'bald',
    hairColor: null,
    age: '64',
    glasses: true,
    gender: 'male',
    image: 'image/Donovan.jpg'
  },
  {
    name: 'Leslie',
    hairType: 'straight',
    hairColor: 'blonde',
    age: '24',
    glasses: false,
    gender: 'female',
    image: 'image/Leslie.jpg'
  }
];

class Person {
  constructor(person) {
    // this.name = person.name;
    // this.hairType = person.hairType;
    // this.age = person.age;
    // this.glasses = person.glasses;
    // this.gender = person.gender;
    // this.image = person.image;
    for(let attribute in person) {
      this[attribute] = person[attribute];
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    }
  }
};






