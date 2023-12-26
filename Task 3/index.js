const findIndicesSum = (target, numbers)=>{
  let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const currentSum = numbers[left] + numbers[right];
  
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return "No such indices found.";
}

  // input the target number

  const targetNumber = 11;
  // input the list of numbers in non-decreasing order,
  
  const numberList = [2, 4, 5, 7, 9];
  
  const result = findIndicesSum(targetNumber, numberList);
  console.log(result);
  