var removeDuplicates = function(nums) {
    var Newarray = [];
    for (let i = 0; i< nums.length;i++) {
        if (Newarray.lastIndexOf(nums[i] == -1)) {
            Newarray.push(nums[i]);
        }        
    }
    return Newarray;
}