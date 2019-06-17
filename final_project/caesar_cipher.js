function rot13(str) {
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
            let num = str.charCodeAt(i) + 13;
            if (num > 90) {
                num -= 26;
            }
            ret += String.fromCharCode(num);
        } else {
            ret += str.charAt(i);
        }
    }
    return ret;
}