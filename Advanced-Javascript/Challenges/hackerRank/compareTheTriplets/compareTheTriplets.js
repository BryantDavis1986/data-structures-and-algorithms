function compareTriplets(a, b) {
    let count = [0, 0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            count[0]++;
        }
        if (a[i] < b[i]) {
            count[1]++;
        }
    }

    return count;

}