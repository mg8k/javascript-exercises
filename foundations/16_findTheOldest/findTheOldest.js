const findTheOldest = function(arr) {
   let newArr = arr.reduce((obj,person) => {
    const date = (new Date()).getFullYear();
    let age = 0;
    let ageO = 0;
    if(!person.yearOfDeath){
       age= date - person.yearOfBirth;
    }else{
        age= person.yearOfDeath - person.yearOfBirth;
    }
    if(!obj.yearOfDeath){

       ageO= date - obj.yearOfBirth;
    }else{
        ageO = obj.yearOfDeath - obj.yearOfBirth;
    }
    if(age >ageO){
        return person;
    }else{
        return obj;
    }
    });
   return newArr;
};

// Do not edit below this line
module.exports = findTheOldest;
