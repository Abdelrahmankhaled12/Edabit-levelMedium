function changeEnough(change, amountDue) {
    for(let i = 0 ; i< change.length;i++) {
   (i === 0) ? change[i] = change[i]*0.25 : (i === 1) ? change[i] = change[i]*0.10 : (i === 2) ? change[i] = change[i]*0.05 : change[i] =  change[i] * 0.01; 
    
}
	return change.reduce((ele,acc)=>ele+acc)>=amountDue;
}


// function changeEnough(change, amountDue) {
//  change[0] = change[0]*0.25;
//  change[1] = change[1]*0.10;
//  change[2] = change[2] *0.05;
//  change[3] = change[3] * 0.01;
//  return change.reduce((ele,acc)=>ele+acc)>=amountDue;
// }




console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5],0.75))
console.log(changeEnough([30, 40, 20, 5], 12.55))
console.log(changeEnough([10, 0, 0, 50], 3.85))
console.log(changeEnough([1, 0, 5, 219], 19.99))