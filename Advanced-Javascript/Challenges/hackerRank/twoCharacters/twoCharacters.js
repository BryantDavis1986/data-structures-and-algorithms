function alternate(s) {
    let maxlen = 0;
    const combinations = [];
    [...new Set(s)].forEach((v, i, a) => {
        a.slice(i + 1).forEach(v1 => {
            combinations.push([v, v1]);
        })
    });
    combinations.forEach(comb => {
        let t = [...s].filter(v => comb.includes(v)).join('');
        if (t.match(/(.)\1/) === null) {
            maxlen = Math.max(maxlen, t.length)
        }
    })
    return maxlen;

}