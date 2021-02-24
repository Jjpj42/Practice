function simplePair(arr,sum){
    let answer = [];
    for(let r = 0 ; r < arr.length ; r++){
        for(let i = 0 ; i < arr.length ; i++){
            let total = (arr[r] * arr[i]);
            if(total == sum){
                if(arr[r] == arr[i]){
                    return null;
                }
                answer.push(arr[r]);
                answer.push(arr[i]);
                return answer;
            }
        }
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));