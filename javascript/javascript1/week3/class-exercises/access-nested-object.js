// DATA

const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
    something: "bla-bla",
  },
};
const user3 = {
    name: "Arthur",
    age: 23,
    role: "Student",
    classes: ["Language", "History"],
    hobbies: {
        favourite: "football",
        sports: "swimming",
    },
};

const users = [user, user2, user3];
const key = ["name", "age", "hobbies"];

let output = "";

// LOGIC

function getValues(users, keysToLog) {

  for(let user of users) {
    for(let key of keysToLog) {
      if(typeof user[key] === "string" || typeof user[key] === "number") {
        output += " " + user[key] + "\n";
      } else if(typeof user[key] === "object") {
          const nestedKeys = Object.keys(user[key]);
          for(let nestedKey of nestedKeys) {
          output += " " + user[key][nestedKey] + "\n";
          }
      } else {
        output += "Something went wrong :0";
      }
    }
  }
  return output;
  
}

// RENDER

console.log(getValues(users, key));