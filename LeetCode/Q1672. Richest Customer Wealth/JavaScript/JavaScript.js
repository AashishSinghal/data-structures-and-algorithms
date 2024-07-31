/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = 0;
    let acc = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i]?.length; j++){
            acc = acc + accounts[i][j];
        }
        if(acc >= wealth){
            wealth = acc
        }
        acc = 0;
    }
    return wealth;
};