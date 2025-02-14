/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    let pairs = [];
    let numbersSeen = new Set();

    for (let num of A) {
        let neededNumber = N - num;
        if (numbersSeen.has(neededNumber)) {
            pairs.push([neededNumber, num]);
        }
        numbersSeen.add(num);
    }
    return pairs;
}

module.exports = sumPairs;
