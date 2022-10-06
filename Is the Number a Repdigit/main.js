function isRepdigit(num) {
    if (num > 0) {
        num = num.toString().split("");
        let trrue = 1;
        for (let i = 0; i < num.length - 1; i++) {
            if (num[i] === num[i + 1]) {
                trrue++;
            } else {
                continue;
            }
        }
        return trrue === num.length;
    } else if (num === 0) {
        return true
    } else {
        return false
    }
}


console.log(isRepdigit(66));
