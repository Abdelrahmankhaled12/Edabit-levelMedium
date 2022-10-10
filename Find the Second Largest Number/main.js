function secondLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            } else {
                continue;
            }
        }
    }
    return arr[arr.length - 2];
}


console.log(secondLargest([10, 40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([54, 23, 11, 17, 10]))
console.log(secondLargest([513, 211, 131, 417, 11]))
console.log(secondLargest([63, 44, 11, 22, 33, 66, 65]))
