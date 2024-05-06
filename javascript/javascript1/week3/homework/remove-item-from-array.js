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
  const nameToRemove = "aHMaD";

  // LOGIC
  // Write some code here
  function deleteItemFromArray(array, itemToDelete) {

    for (let index = 0; index < array.length; index++) {
        if (array[index].toLowerCase() === itemToDelete.toLowerCase()) {
            array.splice(index, 1);
            break;
        }
    }
  }
  // RENDER
  // Code done
  
  deleteItemFromArray(names, nameToRemove);
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']