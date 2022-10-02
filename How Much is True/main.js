function countTrue(array) {
    if(array.length === 0) {
        return 0;
    }else {
        let total = 0;
        for(let i = 0 ; i<array.length ;i++) {
            total+= array[i];
        }
        return total;
    }
}

// solution 2

// function countTrue(array) {
//     return array.filter(element => element).length
// }



console.log(countTrue([true , false ,false,true , false]));
console.log(countTrue([]));
console.log(countTrue([false,false,false]))