function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result += str[i];
      }
    }
  
    return result;
  }