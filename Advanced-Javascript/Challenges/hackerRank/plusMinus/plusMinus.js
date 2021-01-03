function plusMinus(arr) {
    let output = 0.000000;
    let positive = 0,
        negative = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++
        }
        else {
            zero++
        }
    }
    console.log((positive / arr.length) + output);
    console.log((negative / arr.length) + output);
    console.log((zero / arr.length) + output);
}