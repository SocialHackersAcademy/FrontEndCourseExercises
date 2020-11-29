function createUser(firstName, surname, age) {
  return {
    firstName: firstName,
    surname: surname,
    age: age
  };
}
// INPUT: OBJECT -> OUTPUT: STRING
function getUserInfo(user) {
  //return user.firstName + " " + user.surname + ", " + user.age + " years old";
  return `${user.firstName} ${user.surname}, ${user.age} years old`;
}

function displayUsers() {
  const user_list = document.querySelector("#user_list");

  //for (let i = 0; i < users.length; i++){
  for (let user of users) {
    const list_item = document.createElement("li");
    list_item.innerText = getUserInfo(user); // or users[i]
    user_list.appendChild(list_item);
  }
}

function addUser() {
  let name = document.getElementById("name").value;
  users.push(createUser(name, null, null));
  displayUsers();
}

// console.log( createUser("John", "Doe", 21 ) );

let users = [
  createUser("John", "Doe", 21),
  createUser("Kostas", "Athina", 12),
  createUser("Simon", "Garfunkel", 35),
  createUser("Scooby", "Doo", 17),
  createUser("Ben", "Duwer", 66)
];

console.log(users);
console.log(getUserInfo(users[1]));
console.log(getUserInfo(users[3]));
displayUsers();
