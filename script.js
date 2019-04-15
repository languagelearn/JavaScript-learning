var removeDuplicates = function(nums) {
    var Newarray = [];
    for (element in nums) {
        if (Newarray.indexOf(element) == -1) {
            Newarray.push(element);           
        }
    }
}