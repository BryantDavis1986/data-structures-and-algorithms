function hourglassSum(arr) {
    let maxSum = -63,
        i = 0,
        j = 0;
    while (i < 4) {
        let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
        sum += arr[i + 1][j + 1];
        sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
        if (sum > maxSum) 
            maxSum = sum;

        if (j < 4) {
            j++;
        } else {
            j = 0;
            i++;
        }
    }
    return maxSum;
}

module.exports = hourglassSum;