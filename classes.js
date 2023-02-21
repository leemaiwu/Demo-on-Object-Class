
class Dog {
    constructor (name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.hypoAllergenic = false;
    }

    updateHypo(){
      this.hypoAllergenic = true;
    }

    greeting(){
      console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }
}


const dog1 = new Dog("Buddy", "golden retriever", 5);
const dog2 = new Dog("Alaska", "Cockapoo", 3);

dog2.updateHypo();

console.log(dog1);
console.log(dog2);
dog1.greeting();
dog2.greeting();


class Puppy extends Dog {
  constructor(name, breed, age, color){
    super(name, breed, age)

    this.color = color;
    this.trainingLevel = 0;
  }
  updateTraining(num){
    this.trainingLevel += num
  }
}

const puppers = new Puppy("Kevin", "Yorkshire Terrier", .6, "brown/black");
const puppers1 = new Puppy("Wanda", "Irish Setter", 1, "red");

puppers.updateHypo();

puppers1.updateTraining(1);

console.log(puppers);
puppers.greeting();

console.log(puppers1);
puppers1.greeting();

