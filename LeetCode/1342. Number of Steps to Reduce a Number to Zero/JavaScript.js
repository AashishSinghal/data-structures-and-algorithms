/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    if(num == 0){
        return 0
    }
    do{
        if(num % 2 === 0) {
            num = num / 2
            steps += 1
        }
        if(num % 2 != 0) {
            num -= 1
            steps += 1
        }
    } while (num > 0)
    return steps
};