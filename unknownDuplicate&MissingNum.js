function findDupsMiss(arr) {
    let dups = [], set = Array.from(new Set(arr)), sum = 0, min = Infinity, max = -Infinity, counts = {}
    for (let a of arr) {
      if (counts[a]) {
        counts[a] += 1
        dups.push(a)
      } else {
        counts[a] = 1
        sum += a
      }
      if (min > a) min = a
      if (max < a) max = a
    }
    let len = set.length, correctSum = (min + max) * (len + 1) / 2, missing = correctSum - sum
    return [missing, dups.sort((a, b) => a - b)]
  }