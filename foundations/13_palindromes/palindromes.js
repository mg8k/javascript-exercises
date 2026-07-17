const palindromes = function (word) {
    let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cleanedWord = word.toLowerCase()
        .split("")
        .filter((letter)=> alphanumeric.includes(letter))
        .join("");
    const newWord = cleanedWord.split("").reverse().join("");
    
    console.log(newWord);
    return newWord.toLowerCase() === cleanedWord.toLowerCase()

}
// Do not edit below this line
module.exports = palindromes;
