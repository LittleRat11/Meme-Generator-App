let meme = document.querySelector(".meme-img");
const title = document.querySelector("#title");
const getBtn = document.querySelector("#getMeme");
let url = `https://meme-api.com/gimme/`;

// *Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl", "memes"];

// *Function to get random meme
let getMeme = () => {
    // *choose a random subreddits
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    // *Fetch
    meme.src = "loading.svg";
    title.innerHTML = "Loading...";
    getBtn.innerHTML = "Updating.."
    fetch(url + randomSubreddit).then(res => res.json())
        .then(data => {
            // console.log(data)
            console.log(data.title);
            console.log(data.subreddit);
            console.log(data.url);
            getBtn.innerHTML = "Get Meme";
            meme.src = data.url;
            title.innerHTML = data.title;

        })
}

getBtn.addEventListener("click", getMeme);
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getMeme();
    }
})