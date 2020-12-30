function marsExploration(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] !== 'S'){
            count++;
        }
        if(s[i+1] !== 'O'){
            count++;
        }
        if(s[i+2] !== 'S'){
            count++;
        }
        i++;
        i++;
    }
    return count;
    
    }