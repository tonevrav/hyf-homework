function getFullName(firstName, surname, useFormalName, gender) {

    if(!firstName.trim() || !surname.trim()) {
        return "Please, provide both names to get a full name.";
    }
    
    const fullName = `${firstName} ${surname}`;

    if(useFormalName) {
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

const fullName1 = getFullName("Rashid", "Ajami", true, "male");
const fullName2 = getFullName("Ahmed", "   ");