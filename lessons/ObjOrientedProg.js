let dog = {
    name: "Chester",
    numLegs: 3
};



let dog = {
    name: "Spot",
    numLegs: 4
};
// Add your code below this line

console.log(dog.name + dog.numLegs);


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has 4 legs.";
    }

};

dog.sayLegs();


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();


function Dog() {
    this.name = "Chester",
        this.color = "black n white",
        this.numLegs = 3
}



function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Add your code below this line

let hound = new Dog();


function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Chester", "black n white");



/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line


let myHouse = new House(4);
myHouse instanceof House;



function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let p in canary) {
    if (canary.hasOwnProperty(p)) {
        ownProps.push(p);
    }
}




function Dog(name) {
    this.name = name;
}


Dog.prototype.numLegs = 4;
// Add your code above this line
let beagle = new Dog("Snoopy");



function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let p in beagle) {
    if (beagle.hasOwnProperty(p)) {
        ownProps.push(p);
    } else {
        prototypeProps.push(p);
    }
}




function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}



function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 3,
    eat: function () {
        console.log("nomnomnom");
    },
    describe: function () {
        console.log("my name is " + this.name);
    }
};




function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};



function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);



function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);



function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,

};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};


function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = new Animal(); // Change this line
let beagle = new Animal(); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();


function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"



function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
}

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());



let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("zoom");
    }
}

glideMixin(bird);
glideMixin(boat);



function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}



(function () {
    console.log("A cozy nest is ready");
})(); 




let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();


