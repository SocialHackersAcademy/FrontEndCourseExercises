let startSum = 1;
        let endSum = 4;

        const sumAll = function (startSum, endSum) {
            let total = 0;
            for (let i = startSum; i <= endSum; i++) {
                total += i;
            }
            return total;
        }

module.exports = sumAll

