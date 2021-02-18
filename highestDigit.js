const highestDigit = (num) => {

    let max=0;
    let numstr= num.toString();

    for(let i=0;i<numstr.length;i++){

        if(max<numstr[i]){
            max=numstr[i];
        }           
    }
    return max;
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
