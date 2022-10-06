function perimeter(l, num){
	return (l === "s") ? num * 4 : num * 2 * 3.14;
}


// function perimeter(l, num){
// 	return 4*num*(l=='s')+6.28*num*(l=='c')
// }


console.log(perimeter("s", 7))
console.log(perimeter("c", 4))
console.log(perimeter("c", 9))
