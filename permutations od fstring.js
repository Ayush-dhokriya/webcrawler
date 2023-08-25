let nums = [0, 1, 2];
var permute = function (nums, l, r) {
  let permutedNums = [];

  if (l == r) {
    permutedNums.push(nums);
  }
  for (let i = l; i <= r; i++) {
    [nums[i], nums[l]] = [nums[l], nums[i]];
    permute(nums, l + 1, r)[(nums[i], nums[l])] = [nums[l], nums[i]];
  }
};

function finalAns(nums) {
  permute(nums, 0, nums.length - 1);
  console.log(permutedNums);
  return permutedNums;
}
finalAns(nums);
