function digitalClock (sec){
    let seconds = 0;
    let min = 0;
    let hours = 0;
    sec %= 86400;
    let time = sec;
    while(time >=3600){
        sec%=3600;
        time -= 3600;
        hours ++ ;
    }

    while(time >= 60){
        let timeMin = time ;
        timeMin%=60;
        time -= 60;
        min ++ ;
    };
    seconds = time;

 

    //--------
    let result = "";
    if(hours < 10){
        result += "0" + hours + ":";
    }else {
        result += hours +":";
    }

    if(min < 10){
        result += "0" + min + ":";
    }else {
        result += min +":";
    }

    if(seconds < 10){
        result += "0" + seconds;
    }else {
        result += seconds;
    }

    return result;
    
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));