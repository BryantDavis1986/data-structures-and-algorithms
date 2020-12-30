function funnyString(s) {
    const len = s.length;
    for (let i = 0; i < Math.trunc(s.length / 2); i++) {
        if (Math.abs((s[i].charCodeAt() - s[i+1].charCodeAt())) !==
           (Math.abs(s[len-i-1].charCodeAt() - s[len-i-2].charCodeAt()))) {
            return "Not Funny";
        };
    }
    return "Funny";

}