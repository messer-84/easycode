function sum(number) {
    if(number < 1){
        return number;
    }
    return sum(number -1) + number;
}

console.log(sum(5));