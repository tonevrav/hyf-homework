document.addEventListener("DOMContentLoaded", domLoaded);

const userList = document.getElementById("user-list");

function domLoaded() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((json) => {
            return json.json();
        })
        .then((data) => updateDOM(data))
        .catch((error) => console.log("Sorry :("));
}

function updateDOM(users) {
    users.forEach((user) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        h2.textContent = user.name;
        p1.textContent = user.email;
        p2.textContent = user.website;

        li.appendChild(h2);
        li.appendChild(p1);
        li.appendChild(p2);

        userList.appendChild(li);
    });
}
