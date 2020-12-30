function hackerrankInString(s) {
    let string = 'hackerrank';
    if(s.length < string.length){
        return 'NO';
    }
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(j < string.length && s[i] === string[j]){
            j++;
        }
        console.log(string.indexOf(s[i]))
    }
    
    return (j === string.length ? "YES" : "NO");
    
    }
    