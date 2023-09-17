function containsDuplicate(nums: number[]): boolean {
  const hashset = new Set();
  return nums.reduce((acc,item)=>{
    if(hashset.has(item))
      return true
    else
      hashset.add(item)
    return acc
  }, false);
};