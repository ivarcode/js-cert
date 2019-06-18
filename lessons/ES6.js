/* functions from ES6 section */

let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();



function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}



function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");



const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // change code below this line

    s[0] = s[2];
    s[1] = 5;
    s[2] = 7;

    // change code above this line
}
editInPlace();


function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();




const magic = () => new Date();




const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));




const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => arr.filter(x => Number.isInteger(x) && x > 0).map(x => x * x);
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6



const sum = (function () {
    "use strict";
    return function sum(...args) {

        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);



const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79



const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow: { max: maxOfTomorrow } } = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6



let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this line
    [b, a] = [a, b];
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8



const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    let [a, b, ...arr] = list; // change this
    // change code above this line
    return arr;
}
let arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];



const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // do not change this line

    // change code below this line
    return function half({ max, min }) {
        // use function argument destructuring
        return (stats.max + stats.min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015



const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`,
    `<li class="text-warning">${arr[2]}</li>`];
    // change code above this line
    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);



const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object



// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        return this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);



class Vegetable {
    "use strict";
    /* Alter code below this line */
    constructor(veggie) {
        this.name = veggie;
    }
    /* Alter code above this line */
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'



class Thermostat {
    /* Alter code below this line */
    constructor(tempf) {
        this._temperature = tempf;
    }
    get temperature() {
        return (5 / 9) * (this._temperature - 32);
    }
    set temperature(utemp) {
        this._temperature = utemp;
    }
    /* Alter code above this line */

}
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C



import { capitalizeString } from 'string_functions';

"use strict";
capitalizeString("hello!");



"use strict";
export const foo = "bar";
export const bar = "foo";


import * as capStr from "capitalize_strings";
"use strict";


"use strict";
export default function subtract(x, y) { return x - y; }


import subtract from "math_functions";
"use strict";
subtract(7, 4);


