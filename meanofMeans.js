function meanOfMeans(arr, x, y) {
    if (x <= 1 || x > arr.length || y <= 1 || y > arr.length) {
        return -1;
    }

    const firstX = arr.slice(0, x);
    const lastY = arr.slice(-y);

    const meanFirstX = firstX.reduce((a, b) => a + b, 0) / x;
    const meanLastY = lastY.reduce((a, b) => a + b, 0) / y;

    return (meanFirstX + meanLastY) / 2;
}
