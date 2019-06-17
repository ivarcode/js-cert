function telephoneCheck(str) {
    let procStr = "";
    let nums = [];
    let numOfDigits = 0;
    let pos = { open: -1, close: -1, dashA: -1, dashB: -1 };
    for (let i = 0; i < str.length; i++) {
        if /*is number*/ (str.charCodeAt(i) < 58 && str.charCodeAt(i) > 47) {
            numOfDigits++;
            nums.push(parseInt(str.charAt(i)));
            procStr += str.charAt(i);
        } else if (str.charCodeAt(i) == 32) {
            // do not pass a space
        } else if (str.charCodeAt(i) == 45 || str.charCodeAt(i) == 41 || str.charCodeAt(i) == 40) {
            // do pass ) , ( , -
            procStr += str.charAt(i);
            if (str.charCodeAt(i) == 45) {
                if (pos.dashA != -1) {
                    pos.dashB = nums.length;
                } else {
                    pos.dashA = nums.length;
                }
            } else if (str.charCodeAt(i) == 40) {
                pos.open = nums.length;
            } else if (str.charCodeAt(i) == 41) {
                pos.close = nums.length;
            }
        } else {
            console.log('invalid char');
            return false;
        }
    }
    if (numOfDigits != 11 && numOfDigits != 10) {
        return false;
    }
    if (numOfDigits == 10) {
        let key = [
            [-1, -1, -1, -1],
            [-1, -1, 3, 6],
            [0, 3, 6, -1]
        ];
        for (let i = 0; i < key.length; i++) {
            if (pos.open == key[i][0] && pos.close == key[i][1] && pos.dashA == key[i][2] && pos.dashB == key[i][3]) {
                return true;
            }
        }
    }
    if (numOfDigits == 11) {
        if (nums[0] != 1) {
            return false;
        }
        let key = [
            [-1, -1, -1, -1],
            [-1, -1, 4, 7],
            [1, 4, 7, -1]
        ];
        for (let i = 0; i < key.length; i++) {
            if (pos.open == key[i][0] && pos.close == key[i][1] && pos.dashA == key[i][2] && pos.dashB == key[i][3]) {
                return true;
            }
        }
    }
    return false;
}


console.log(telephoneCheck("15555555555"));