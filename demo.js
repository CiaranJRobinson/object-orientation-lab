let person = {
    firstname: "Ciaran",
    lastname: "Robinson",
    age: 29,
    favorites: {
        movies: ["Thor","Sharknado","Snakes on a Plane", "LoTR"],
        artists: ["The Wiggles","Beethoven","Lil Nas X"]
    },
    greeting: () => {
        console.log("Hello world!");
    }
}

//Now lets practice acessing kay/value pairs within our object
//we can use dot bracket notation
console.log(person.firstname);
console.log(person["firstname"]);

//How do I access the movie of LoTR in my person object?

console.log(person.favorites.movies[3]);
//make a greeting function within the person object, and invoke it
person.greeting();

//lets practice some destructuring
//let {lastname} = person;
//console.log(lastname);

let {greeting} = person;
greeting();

//destructure lots of things
let {firstname, lastname, age} = person;
console.log(firstname, lastname, age);

//Rename age with destructuring to yearsOfWisdom.
let {age: yearsOfWisdom} = person;
console.log(yearsOfWisdom);

//Review of looping objects using for...in loops
for(const property in person){
    console.log(`The property of ${property} has a value of: ${person[property]}`);
}

// Talking about adding and deleting properties
//To add:
person.job = "Instructor";
console.log(person.job);

//To remove:
delete person.job;


//CLasses!>?!?!

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}.`);
    }
}

const kumo = new Dog("Kumo", "Shiba Inu", 1);
console.log(kumo);
kumo.greeting();

// Now lets tackle class extension using puppies!
class Puppy extends Dog {
    constructor(name, breed, age, isTeething){
        super(name, breed, age);

        this.isTeething = isTeething;
    }
}

const fluffy = new Puppy("Fluffy", "Poodle", 13, true);
console.log(fluffy);
