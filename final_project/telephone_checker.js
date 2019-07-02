function telephoneCheck(str) {
    let regex = /^1?\s?\(\d{3}\)\s?\d{3}\s?-?\d{4}$|^1?\s?\d{3}\s?\d{3}\s?-?\d{4}$|^1?\s?\d{3}\s?-?\d{3}\s?-?\d{4}$/;
    if (!str.match(regex)) {
        return false;
    }
    return true;
}

console.log(telephoneCheck("1555"));