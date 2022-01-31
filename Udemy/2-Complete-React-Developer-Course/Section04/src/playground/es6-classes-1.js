class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `hi. i am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` i am visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler('ahmed samir', 29, 'cairo');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'nowhere');
console.log(other.getGreeting());
