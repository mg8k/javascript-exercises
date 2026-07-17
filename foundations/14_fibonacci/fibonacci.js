const fibonacci = function(num) {
    let seq =[0,1];
    if(num <0) return "OOPS";
    for(let i = 2 ; i<=num; i++){
       seq[i] = seq[i-1] + seq[i-2];
    }
    return seq[num];
};

// Do not edit below this line
module.exports = fibonacci;
