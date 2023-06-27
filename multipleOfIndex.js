function multipleOfIndex(array) {
    const result = [];
  for (let i = 0; i < array.length; i++) {
   if (array[i] % i === 0 || array[i] === 0) {
      result.push(array[i]);
    }
  }
  return result;
  
}