function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}

console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([['a', 'b'], ['c', 'd']]))
console.log(flatten([[true, false], [false, false]]))


