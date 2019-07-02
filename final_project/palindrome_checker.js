function palindrome(str) {
    let parsedStr = str.toLowerCase().trim().match(/(\d|[a-z])+/g).join('');
    console.log(parsedStr);
    let a = 0;
    let b = parsedStr.length - 1;
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



palindrome("not a palindrome");