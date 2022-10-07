function keysAndValues(obj) {
    return [Object.getOwnPropertyNames(obj),Object.values(obj)]
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))