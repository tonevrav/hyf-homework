document.addEventListener("DOMContentLoaded", domLoaded);
const userContainer = document.getElementById("userContainer");

function domLoaded() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((unreadableData) => {
            return unreadableData.json();
        })
        .then((data) => updateDOM(data.slice(0, 10)))
        .catch((error) => console.log(error))
        .finally(() => (loading = false));
}
function updateDOM(images) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    images.forEach((image) => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.thumbnailUrl;
        img.alt = image.title;

        const title = document.createElement("h3");
        title.textContent = image.title;

        item.appendChild(title);
        item.appendChild(img);

        gallery.appendChild(item);
    });
}
