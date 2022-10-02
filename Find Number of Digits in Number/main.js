function num_of_digits(num){
    if(num === 0) {
        return 1;
    }else {
        let len = 0;
        while(num){
        num = Math.trunc(num/10);
        len++;
        }
        return len;
    }
    
}
console.log(num_of_digits(0))