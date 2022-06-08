console.log("Searching");

let giphyForm = document.querySelector("form");
let image = document.querySelector("#image");

const MY_API_KEY_HERE = "4NY7AcdZVVOvHTnVCQV40I07z2dtTE9W";

// giphyForm.addEventListener("submit", getResults())

giphyForm.addEventListener("submit", getResults);

//User inputs something
async function getResults(evt) {
    console.log("Processing... Submitted");
    console.log(evt);
    evt.preventDefault();
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${MY_API_KEY_HERE}&q=${evt}&limit=5&offset=0&rating=G&lang=en`);
    let gifs = await response.json();
    // console.log(gifs.data);
    gifs.data.forEach((evt) => {
        displayResults(evt);
    });
}
// function displayResults(gifs) {
//     gifs.data.forEach((evn) => {
//         image.innerHTML += `<img src="${gifs[].images.original.url}">`;
//     });
// }


function displayResults(q) {
    // let query = object.data[3].images.original.url
    // object.forEach(document.querySelector("#image").src === new URL(`https://api.giphy.com/v1/gifs/search?api_key="${MY_API_KEY_HERE}"&q=puppy`) {
    //     // image.innerHTML += `<div id="image"><img src="${query}"/></div>`;
    // });

    // let response = new Map();
    // map[].images.rendition.url
    image.innerHTML += `<img src="${q.images.original.url}">`;

}

    //     let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key="${MY_API_KEY_HERE}"&q=puppy`);
    //     console.log(response);
    //     let gifs = await response.json();
    //     console.log(gifs);
    // }

    // function displayResults(giphyUrl) {
    //     document.querySelector("#giphy").src = giphyUrl;

    //     forEach(getResults(image.innerHTML += `<div id="image"></div>`))

    // }
