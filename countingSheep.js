function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (typeof arrayOfSheep[i] === 'boolean' && arrayOfSheep[i] === true) {
        count++;
      }
    }
    return count;
  }
  