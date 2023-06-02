function searchArray(arrayToSearch, query) {
    // Validate inputs
    if (!Array.isArray(arrayToSearch) || !Array.isArray(query)) {
      throw new Error('Invalid input: Inputs should be arrays');
    }
  
    if (arrayToSearch.some(arr => !Array.isArray(arr) || arr.length !== 2)) {
      throw new Error('Invalid input: Each element of the array to be searched should be an array of length 2');
    }
  
    if (query.length !== 2) {
      throw new Error('Invalid input: Query should be an array of length 2');
    }
  
    // Perform search
    for (let i = 0; i < arrayToSearch.length; i++) {
      if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
        return i;
      }
    }
  
    return -1; // No match found
  }
  