const repeatString = function(text, num) {
    if (num <0){
        text="ERROR";
        return text
    }
    let concText =[];
    for(let i =1; i<=num;i++){
        concText.push(text);
    }
    let final = concText.join("")
    return final
};

// Do not edit below this line
module.exports = repeatString;
