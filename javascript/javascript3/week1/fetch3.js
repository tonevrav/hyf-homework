document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const imageCard = document.getElementById("imageCard");
    const image = document.getElementById("image");

    let breeds = [];
    let randomBreed = "";

    // function fetchRandomImage() {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(response.status);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             image.src = data.message;

    //             setTimeout(() => {
    //                 fetchRandomImage();
    //             }, 2000);
    //         })
    //         .catch((error) => console.log(error));
    // }

    function fetchBreeds() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                breeds = Object.keys(data.message);
                randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

                fetchRandomBreedImage();

                setTimeout(() => {
                    fetchBreeds();
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function fetchRandomBreedImage() {
        fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                image.src = data.message;

                const desc = document.getElementById("desc");
                desc.innerText = randomBreed;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    fetchBreeds();
}
