// returns true if param str is a palindrome and false if str is not
function palindrome(str) {
    let parsedStr = "";
    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
        console.log(str.charCodeAt(i));
        //is upper
        if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
            //make lower
            parsedStr += String.fromCharCode(str.charCodeAt(i) + 32);
        }
        //is lower || number
        if ((str.charCodeAt(i) < 123 && str.charCodeAt(i) > 96) || (str.charCodeAt(i) < 58 && str.charCodeAt(i) > 47)) {
            parsedStr += str.charAt(i);
        }
    }
    console.log(parsedStr);
    let a = 0;
    let b = parsedStr.length - 1;
    console.log(a + " " + b);
    // while b and a have not overlapped
    while (b > a) {
        if (parsedStr.charCodeAt(a) == parsedStr.charCodeAt(b)) {
            b--;
            a++;
        } else {
            return false;
        }
    }
    return true;
}


console.log(palindrome("raceca"));