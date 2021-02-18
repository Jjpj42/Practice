const capToFront = (str) => {
    let upstr='';
    let lowstr='';

    for(let i =0;i<str.length;i++){
        let temp = str.charAt(i);
        if(str[i] === temp.toUpperCase()){
            upstr+=str[i];
        }
        else{
            lowstr+=str[i];
        }


    }
    return upstr+lowstr;
}
console.log(capToFront('hApPy'));
console.log(capToFront('moveMENT'));
console.log(capToFront('shOrtCAKE'));