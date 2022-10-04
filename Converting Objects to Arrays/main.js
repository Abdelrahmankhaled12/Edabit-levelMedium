// solution 1
function toArray(obj) {
	return Object.entries(obj);
    }
// solution 2

// function toArray(obj) {
// 	let arr=[];
// 	for(let i = 0 ; i< Object.values(obj).length;i++) {
// 		arr[i] = new Array(Object.getOwnPropertyNames(obj)[i], Object.values(obj)[i]);	
// 	}
// 	return arr;
// }


console.log(toArray({ a: 1, b: 2 }))