function totalVolume(){

    
    let sum=0;
    for(let arg of arguments){
        let total=1;
        for(let i=0;i<arg.length;i++){
                total *= arg[i];

        }

        sum+=total;
    }

    return sum;
}







console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2,],[2,1,1]));
console.log(totalVolume([1,1,1]));