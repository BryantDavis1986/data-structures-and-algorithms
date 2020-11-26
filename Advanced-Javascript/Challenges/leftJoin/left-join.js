'use strict';

function leftJoin(hash1, hash2){
    let array = [];
    // for(let [key, value] in hash1){
    //     console.log(key, value);
    //     let tempArray = [key];
    //     if(hash2.contains(key)){
    //         let hash2Value = hash2.get(key);
    //         // hash1.add(key, hash2Value);
    //         tempArray.push(value, hash2Value);
    //     }
    //     else{
    //         // hash1.add(key, 'NULL')
    //         tempArray.push(value, 'NULL');
    //     }
    //     array.push(tempArray);
    //     console.log(array);
    // }
// console.log(JSON.stringify(hash1));

    for(let i = 0; i < hash1.map.length; i++){
        // console.log(hash1.map.length);
        let walker;
        let runner;
        // console.log(hash1.map[i]);
        if(hash1.map[i]){
            walker = hash1.map[i].head;
            if(hash2.map[i]){
                runner = hash2.map[i].head;
            }
            else{
                runner = null;
            }
        }
        else{
            walker = null;
        }
        let tempArray = [];
        if(walker && !runner){
            // console.log('runner is null')
            tempArray.push(walker.key, walker.value, 'NULL')
            array.push(tempArray);
        }
        // console.log(i);
        while(walker && runner){
            // console.log(walker);
            // console.log(runner);
            tempArray = [];
            if(walker.key === runner.key){
                // console.log(walker.key)
                // console.log(walker.value);
                // console.log(runner.value);
                tempArray.push(walker.key, walker.value, runner.value)
                array.push(tempArray)
            }
            // console.log(walker.next);
            // console.log(runner.next);
            walker = walker.next;
            runner = runner.next;
            
        }
        // console.log(`temp array: ${tempArray.length} ${tempArray}`)
        // console.log(array.length);
        // console.log(array)

    }
    return array;

}

module.exports = leftJoin;