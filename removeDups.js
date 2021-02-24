function removeDups(arr){
    let Arrnew = [];
    let str = true;
    for(let r = 0 ; r < arr.length ; r++){
        for(let i = 0 ; i < Arrnew.length ; i++){
            if(newArr[i] == arr[r]){
                str = false ;
            }
        }
        if(str == true){
            Arrnew.push(arr[r]);
        }
    }
    return Arrnew;
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));