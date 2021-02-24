function sumTwoSmallestMuns(arr) {
    let min = arr[0];
    let max = arr[0];
    // min 1
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < min){
            if(arr[i] > 0){
                min = arr[i];
            }
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }

   let min2 = max ;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] != min){
            if(arr[i] > 0){
                if(arr[i] < min2){
                    min2 = arr[i];
                }
            }
        } 
    }
    console.log("min = ",min);
    console.log("min2 = ",min2);
}

console.log(sumTwoSmallestMuns([19,5,43,2,77]));
console.log(sumTwoSmallestMuns([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestMuns([2,9,6,-1]));
console.log(sumTwoSmallestMuns([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestMuns([3683,2902,-475,1617,-2385]));