// DATA
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  // LOGIC
  // Write some code here
  function deleteItemFromArray(array, itemToDelete) {
    const indexOfNameToRemove = names.indexOf(nameToRemove);
    if (indexOfNameToRemove >= 0) {
      names.splice(indexOfNameToRemove, 1);
    } else {
      console.log("Sorry, there is no person in the list with that name. Please, make sure that you've typed the name correctly");
    }
  }
  // RENDER
  // Code done
  
  const nameToRemove = "aHMaD";
  // const nameToRemove = "Ahmad";
  deleteItemFromArray(names, nameToRemove);
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']