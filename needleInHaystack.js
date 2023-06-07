function findNeedle(haystack) {
    const index = haystack.indexOf('needle');
    if (index !== -1) {
      return `found the needle at position ${index}`;
    } else {
      return "needle not found";
    }
  }
  