// DATA
const notes = [];

// LOGIC
function saveNote(content, id) {
    notes.push({content, id});
}

function getNote(id) {
    for(let note of notes) {
        if(note["id"] === id && typeof note["id"] === "number") {
            return note;
        }
    }
    return `There is no item with id ${id}. Please, make sure you use a correct id`;
}

function logOutNotesFormatted() {
    for(let note of notes) {
        console.log(`The note with id: ${note["id"]}, has the following note text: "${note["content"]}".`);
    }
}

function removeNote(id) {
    for(let i = 0; i < notes.length; i++) {
        if(notes[i]["id"] === id && typeof notes[i]["id"] === "number") {
            notes.splice(i, 1);
            for (let j = i; j < notes.length; j++) {
                notes[j]["id"] -= 1;
            }
        }
    }
    return "Something went wrong!";
}

// RENDER
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Go Jogging", 3);
saveNote("Go Cycling", 4);
saveNote("Go Shopping", 5);

// console.log(notes);

const firstNote = getNote(1);
// console.log(firstNote); // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted();

removeNote(4);
// console.log(notes);