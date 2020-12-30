function caesarCipher(s, k) {
    s = s.split('');
    k = k > 25 ? k % 26 : k; 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.slice(k) + alphabet.slice(0,k);
    for(let i=0; i<s.length; i++){
        if(/[a-zA-Z]/.test(s[i])){
            let index = s[i].charCodeAt(0)-97;
            if(index < 0){
                index = s[i].charCodeAt(0)-65;
                s[i] = alphabet[index].toUpperCase();
            }else{
                s[i] = alphabet[index]
            }
        }
    }
    return s.join('')

}