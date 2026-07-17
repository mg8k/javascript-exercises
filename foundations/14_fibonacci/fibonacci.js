const fibonacci = function(num) {
    let total = 0;
    for(let i = 0 ; i<num; i++){
        total += i-1;
        console.log(total);
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
