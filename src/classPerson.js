console.log('classPerson.js is connected')


const persons = [
  {
    name: 'Alice',
    hairType: 'curly',
    hairColor: 'brown',
    age: 50,
    glasses: true,
    gender: 'female',
  },
  {
    name: 'Jason',
    hairType: 'curly',
    hairColor: 'black',
    age: '34',
    glasses: false,
    gender: 'male',
  },
  {
    name: 'Donovan',
    hairType: 'bald',
    hairColor: null,
    age: '64',
    glasses: true,
    gender: 'male',
  },
  {
    name: 'Leslie',
    hairType: 'straight',
    hairColor: 'blonde',
    age: '24',
    glasses: false,
    gender: 'female',
  }
];



class Person {
  constructor(person) {
    this.name = person.name;
    this.hairType = person.hairType;
    this.hairColor = person.hairColor;
    this.age = person.age;
    this.glasses: person.glasses;
    this.gender: person.gender;
  }
}



