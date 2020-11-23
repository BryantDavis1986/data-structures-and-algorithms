function repeatedWord(string){
    if(string.length <= 1){
        return string;
    }
    let lowercase = string.toLowerCase()
    let stringArray = lowercase.split(' ');
    let duplicateArray = [];

    for(let ele of stringArray){
        console.log(ele);
        if(duplicateArray.includes(ele)){
            return ele;
        }
        if(!duplicateArray.includes(ele)){
            duplicateArray.push(ele);
        }
    }

    return "no duplicates";
}

module.exports = repeatedWord;