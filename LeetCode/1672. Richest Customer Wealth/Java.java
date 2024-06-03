class Solution {
    public int maximumWealth(int[][] accounts) {
        int wealth = 0;
        int acc = 0;
        for (int i = 0; i < accounts.length; i++){
            for (int j = 0; j < accounts[i].length; j++){
                acc = acc + accounts[i][j];
            }
            if(acc >= wealth){
                wealth = acc;
            }
            acc = 0;
        }
        return wealth;
    }
}