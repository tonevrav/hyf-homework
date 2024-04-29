function getFullName(firstName, surname, useFormalName, gender) {

    if(!firstName || !surname) {
        return "Please, provide both names to get a full name.";
    }

    const fullName = `${firstName} ${surname}`;

    if(useFormalName === true) {
        if(gender === "male") {
            return `Lord ${fullName}`;
        } else if (gender === "female") {
            return `Lady ${fullName}`;
        } else {
            return "Please, indicate your gender.";
        }
    }

    return fullName;
}

const fullName1 = getFullName("Peter", "Garryson", false, "male");
const fullName2 = getFullName("Vasylisa", "Kugut", true, "female");

const fullName3 = getFullName("Rashid", "Ajami");
console.log(fullName3);