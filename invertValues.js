function invert(array) {
  
  
    for(const num in array) {
      array[num] = - array[num]
    }
     return array ;
  }