function diagonalDifference(n, arr) {
    // Write your code here
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i][i];
        sum -= arr[i][n - i - 1];
    }
    return Math.abs(sum);
}