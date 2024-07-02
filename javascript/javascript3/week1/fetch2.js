document.addEventListener("DOMContentLoaded", domLoaded);

const imagesEl = document.getElementById("images-list");

function domLoaded() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((json) => {
            return json.json();
        })
        .then((data) => {
            updateDOM(data.slice(0, 10));
        });
}

function updateDOM(images) {
    for (let i = 0; i < 10; i++) {
        images.forEach((image) => {
            const headerEl = document.createElement("h2");
            const imgEl = document.createElement("img");

            headerEl.textContent = image.title;
            imgEl.src = image.thumbnailUrl;

            imagesEl.appendChild(imgEl);
            imagesEl.appendChild(headerEl);
        });
    }
}

// UNFINISHED
