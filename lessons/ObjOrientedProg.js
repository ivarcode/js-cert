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



