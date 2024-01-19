const sumAll = function (start, finish) {
    if (start < 0) return "Er"
    let sum = 0;
    if (start > finish) {
        let tmp = start;
        start = finish;
        finish = tmp;
    }
    for (let i = start; i <= finish; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
