function digitize(n) {
  const digits = String(n).split('').map(Number);
  return digits.reverse();
}


