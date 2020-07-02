// ====================== 一、两数之和 ======================
function numMath (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var dif = target - nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      if(nums[j] == dif)
        return [i,j];
    }
  }
};
console.log(numMath([2,9,0,7], 9));

// or ↓

function numMap (nums, target) {
  var temp = [];
  for (var i=0; i < nums.length; i++) {
    var dif = target - nums[i];
    if (temp[dif] != undefined) {
      return [temp[dif], i];
    }
    temp[nums[i]] = i;
  }
};
console.log(numMap([5,-3,7,3,2],10));
