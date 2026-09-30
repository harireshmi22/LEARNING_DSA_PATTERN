class Solution {
    public int findMiddleIndex(int[] nums) {
        int leftSum = 0; 
        int totalSum = 0; 

        for(int num : nums) {
            totalSum += num; 
        } 

        for(int i = 0; i < nums.length; i++) {
            if(leftSum == (totalSum - leftSum - nums[i])) return i; 

            leftSum += nums[i]; 
        }  

        return -1; 
    }
}