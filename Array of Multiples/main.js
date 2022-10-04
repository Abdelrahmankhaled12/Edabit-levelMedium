function arrayOfMultiples (num, length) {
    let x = []
    for(let i = 1 ; i <=length;i++)
        x[i-1]= num * i;
        return x
    }
    
    console.log(arrayOfMultiples(12, 10))