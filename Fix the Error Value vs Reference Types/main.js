function checkEquals(arr1, arr2) {
    if (arr1.filter((ele, i) => ele === arr2[i]).length === arr2.length) {
        return true
    } else {
        return false
    }
}


console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 6, 7]))