const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        // CALL THE GET AGE FUNCTION FOR BOTH OLDEST AND CURRENT PERSON
        // IF CURRENT PERSON IS OLDER, SET AS OLDEST
        const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function(death, birth) {
    // INSERT CODE TO GET THE AGE
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
