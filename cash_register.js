function checkCashRegister(price, cash, cid) {
    var diff = cash - price;
    let total_cid = 0;
    for (let i = 0; i < cid.length; i++) {
        total_cid += cid[i][1];
    }
    if (total_cid == diff) {
        return { status: "CLOSED", change: cid };
    } else if (total_cid < diff) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
        let change_returned = [];
        let limit = 3;
        while (diff != 0 && limit > 0) {
            limit--;
            let added_change = false;
            for (let i = cid.length - 1; i > -1; i--) {
                if (cid[i][1] == diff) {
                    change_returned.push(cid[i]);
                    return { status: "OPEN", change: change_returned };
                } else if (cid[i][1] > diff) {
                    //add change but not ALL the change
                    let multiplier = -1;
                    switch (i) {
                        case 0: multiplier = 0.01;
                            break;
                        case 1: multiplier = 0.05;
                            break;
                        case 2: multiplier = 0.1;
                            break;
                        case 3: multiplier = 0.25;
                            break;
                        case 4: multiplier = 1;
                            break;
                        case 5: multiplier = 5;
                            break;
                        case 6: multiplier = 10;
                            break;
                        case 7: multiplier = 20;
                            break;
                        case 8: multiplier = 100;
                            break;
                    }
                    let a = parseInt(diff / multiplier);
                    a *= multiplier;
                    if (a != 0) {
                        change_returned.push([cid[i][0], a]);
                        added_change = true;
                    }
                    diff -= a;
                    diff = diff.toFixed(2);

                } else {
                    change_returned.push(cid[i]);
                    added_change = true;
                    diff -= cid[i][1];
                    diff = diff.toFixed(2);
                }
            }
            if (!added_change) {
                break;
            }
        }
        if (diff == 0) {
            return { status: "OPEN", change: change_returned };
        }
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);