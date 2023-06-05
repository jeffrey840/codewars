function findAverage(list) {
    if (list.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
  
    return sum / list.length;
  }