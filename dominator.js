function dominator(arr) {
    const countMap = new Map();
  
    // Count the occurrences of each element in the array
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const count = countMap.get(num) || 0;
      countMap.set(num, count + 1);
    }
  
    // Find the dominator (element occurring more than half the size of arr)
    const halfSize = Math.floor(arr.length / 2);
    for (const [num, count] of countMap.entries()) {
      if (count > halfSize) {
        return num;
      }
    }
  
    // If no dominator is found, return -1
    return -1;
  }
 
  const arr = [3, 4, 3, 2, 3, 1, 3, 3];
  console.log(dominator(arr)); // Output: 3
  