function alternate(n, value1, value2) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        result.push(value1);
      } else {
        result.push(value2);
      }
    }
  
    return result;
  }