let yourArray = ["ayyo", 5, true, 6, 7]; // change this line


let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = "it's lit";
//change code above this line
console.log(myArray);


function mixedNumbers(arr) {
    // change code below this line
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));


function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));


function sumOfTen(arr) {
    // change code below this line
    arr.splice(1, 2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 1, 'DarkSalmon');
    arr.splice(1, 1, 'BlanchedAlmond');
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke',
    'LavenderBlush', 'PaleTurqoise', 'FireBrick']));



function forecast(arr) {
    // change code below this line
    let r = arr.slice(2, 4);
    return r;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));


function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
    return sentence;
}

// do not change code below this line
console.log(spreadOut());


function quickCheck(arr, elem) {
    // change code below this line
    if (arr.indexOf(elem) != -1)
        return true;
    return false;
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    // change code above this line
    return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


let myNestedArray = [
        // change code below this line
        ['unshift', false, 1, 2, 3, 'complex', 'nested'],
        ['loop', 'shift', 6, 7, 1000, 'method', ['deep']],
        ['concat', false, true, 'spread', 'array', [['deeper']]],
        ['mutate', 1327.98, 'splice', 'slice', 'push', [[['deepest']]]],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
        // change code above this line
    ];


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods['strawberries'] = 27;
// change code above this line

console.log(foods);


let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);


let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    return 'Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj
        && obj.Alan.online && obj.Jeff.online && obj.Sarah.online && obj.Ryan.online;
    // change code above this line
}

console.log(isEveryoneHere(users));


let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    // change code below this line
    let n = 0;
    for (let user in obj) {
        if (obj[user].online) {
            n = n + 1;
        }
    }
    return n;
    // change code above this line
}

console.log(countOnline(users));


let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
}

console.log(getArrayOfUsers(users));


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line  
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
}

console.log(addFriend(user, "Pete"));


