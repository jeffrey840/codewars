function countSmallerToRight(arr) {
    const result = [];
    const n = arr.length;
  
    for (let i = n - 1; i >= 0; i--) {
      let count = 0;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[i]) {
          count++;
        }
      }
  
      result.unshift(count);
    }
  
    return result;
  }
  
  // Examples:
  console.log(countSmallerToRight([5, 4, 3, 2, 1])); // Output: [4, 3, 2, 1, 0]
  console.log(countSmallerToRight([1, 2, 0])); // Output: [1, 1, 0]
  