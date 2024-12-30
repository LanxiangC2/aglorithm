function majorityElement(nums: number[]): number {

  let candicate = nums[0];
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candicate = nums[i]
    }

    if (candicate === nums[i]) {
      count++
    } else {
      count--
    }
   };

  return candicate
}
export { majorityElement }