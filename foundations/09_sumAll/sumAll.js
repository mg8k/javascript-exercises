const sumAll = function(num1, num2) {
    let result= 0;
    let min = 0;
    let max = 0;
    if(num1>num2){
        min = num2;
        max = num1;
    }else{
        min = num1;
        max = num2;
    }
    if(num1<0 || num2 <0){
        return "ERROR";
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    for(let i = min; i<=max; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
