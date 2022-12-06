function fibonacci(num){
  var nums = [1,1]

  for (let i = 0; i < num; i++){
    if (num == 1) nums.pop()
    if (i > 1) nums.push(nums[i-1] + nums[i-2])
  }
  return nums
}

for (let i=1; i <= 6; i++) {
  console.log(fibonacci(i));
}