// DATA
// LOGIC

function getCharacterFrequencies(string) {

    const result = {
        characters: [],
        length: 0,
    }

    for(let i = 0; i < string.length; i++) {
        
        let found = false;

        // Iterating through the array of objects and comparing their values with the characters of the string
        for(let j = 0; j < result.characters.length; j++) {
            if(string[i] === result.characters[j].character){
                found = true;
                result.characters[j].count ++;
                break;
            }
        }

        if(!found) {
            result.characters.push({
                character: string[i],
                count: 1,
            });
        }

      result.length = string.length;
    }

    return result;
    
}

// RENDER

console.log(getCharacterFrequencies("happy"));
console.log(getCharacterFrequencies("unhappy"));