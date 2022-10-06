function concat(...args) {
	let x =[]
    for(let i = 0;i<args.length;i++){
        x[i] = args[i];
    }
    x = x.join().split(",");
    return  Number.isInteger(+x[0]) === true ? x.map(ele=>+ele) : x;
}


// function concat(...args) {
//         return [].concat(...args)
// }

// function concat(...args) {
//     return args.flat();
// }

console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1], [2], [3], [4], [5], [6], [7]))
console.log(concat([1, 2], [3, 4]))
console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat(['a'], ['b', 'c']))
