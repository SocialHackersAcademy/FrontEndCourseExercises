// Repl to test code https://repl.it/@pchan01/findTheOldestPerson

let findTheOldest = function(peopleArr) {

    let currentYear = new Date().getFullYear();
  
    let oldestAge = peopleArr
                      .map(person => !person.yearOfDeath ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth)
                      .reduce((firstAge, nextAge) => firstAge > nextAge ? firstAge : nextAge);
  
    let indexOfOldestPerson = peopleArr
                                .map(person => !person.yearOfDeath ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth)
                                .indexOf(oldestAge);
  
    return peopleArr[indexOfOldestPerson];
}

module.exports = findTheOldest

