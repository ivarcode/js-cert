function convertToRoman(num) {
    if (num < 4000) {
        let a = parseInt(num / 1000);
        let b = "";
        for (let i = 0; i < a; i++) {
            b += 'M';
        }
        return b + one_thousand(num - (1000 * a));
    } else {
        return "number out of bounds :: improper roman numeral";
    }
}

function one_thousand(n) {
    if (n == 1000) {
        return 'M';
    } else if (n < 1000 && n > 899) {
        return 'CM' + one_hundred(n - 900);
    } else if (n < 900 && n > 500) {
        return five_hundred(500) + five_hundred(n - 500);
    } else {
        return five_hundred(n);
    }
}

function five_hundred(n) {
    if (n == 500) {
        return 'D';
    } else if (n < 500 && n > 399) {
        return 'CD' + one_hundred(n - 400);
    } else {
        let a = parseInt(n / 100);
        let b = "";
        for (let i = 0; i < a; i++) {
            b += 'C';
        }
        return b + one_hundred(n - (100 * a));
    }
}

function one_hundred(n) {
    if (n == 100) {
        return 'C';
    } else if (n < 100 && n > 89) {
        return 'XC' + ten(n - 90);
    } else if (n < 90 && n > 50) {
        return fifty(50) + fifty(n - 50);
    } else {
        return fifty(n);
    }
}

function fifty(n) {
    if (n == 50) {
        return 'L';
    } else if (n < 50 && n > 39) {
        return 'XL' + ten(n - 40);
    } else {
        let a = parseInt(n / 10);
        let b = "";
        for (let i = 0; i < a; i++) {
            b += 'X';
        }
        return b + ten(n - (10 * a));
    }
}

function ten(n) {
    if (n == 10) {
        return 'X';
    } else if (n == 9) {
        return 'IX';
    } else if (n < 9 && n > 5) {
        return five(5) + five(n - 5);
    } else {
        return five(n);
    }
}

function five(n) {
    if (n == 5) {
        return 'V';
    } else if (n == 4) {
        return 'IV';
    } else {
        let r = "";
        for (let i = 0; i < n; i++) {
            r += 'I';
        }
        return r;
    }
}


console.log(convertToRoman(1023));