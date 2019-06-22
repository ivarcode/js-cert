function convertToF(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

convertToF(30);


function reverseString(str) {
    let r = "";
    for (let i = 0; i < str.length; i++) {
        r = str.charAt(i) + r;
    }
    return r;
}

reverseString("hello");


function factorialize(num) {
    if (num == 0) {
        return 1;
    }
    for (let i = num - 1; i > 1; i--) {
        num = num * i;
    }
    return num;
}

factorialize(5);


function findLongestWordLength(str) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1 && str.charAt(i) != ' ') {
            curr++;
        }
        if (str.charAt(i) == ' ' || i == str.length - 1) {
            if (curr > max) {
                max = curr;
            }
            curr = 0;
        } else {
            curr++;
        }
    }
    return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


function largestOfFour(arr) {
    // You can do this!
    let r = [-100, -100, -100, -100];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > r[i]) {
                r[i] = arr[i][j];
            }
        }
    }
    return r;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.slice(str.length - target.length) == target;;
}

confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
    if (num > 0) {
        let s = "";
        for (let i = 0; i < num; i++) {
            s += str;
        }
        return s;
    }
    return "";
}

repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
    if (num >= str.length) {
        num = str.length;
        return str;
    }
    return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
    let num = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            num = arr[i];
            return num;
        }
    }
    return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return bool === true || bool === false;
}

booWho(null);


function titleCase(str) {
    let r = "";
    let up = true;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            up = true;
            r += ' ';
        } else {
            if (up) {
                r += str[i].toUpperCase();
                up = false;
            } else {
                r += str[i].toLowerCase();
            }
        }
    }
    console.log(r);
    return r;
}

titleCase("I'm a little tea pot"); 



function frankenSplice(arr1, arr2, n) {
    // THIS WORKS TOO 
    // return [arr2.slice(0,n), ...arr1, arr2.slice(n,arr2.length)];
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); 



function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    if (num > arr[arr.length - 1]) {
        return arr.length;
    }
    return 0;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));



function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].indexOf(arr[1].charAt(i).toLowerCase()) == -1 &&
            arr[0].indexOf(arr[1].charAt(i).toUpperCase()) == -1) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);



function chunkArrayInGroups(arr, size) {
    // Break it up.
    let r = [];
    for (let i = 0; i < arr.length; i += size) {
        r.push(arr.slice(i, i + size));
    }
    return r;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));



