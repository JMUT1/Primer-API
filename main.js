const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?limit=2&api_key=a748ab71-257b-45a7-90c9-b428252d9f12";

const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites/search?limit=2&api_key=a748ab71-257b-45a7-90c9-b428252d9f12";

const spanError = document.getElementById("error")


async function loadRandomDogs (){
    const res = await fetch (API_URL_RANDOM);
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "HUBO UN ERROR" + res.status

    } else{
        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        img1.src = data[0].url
        img2.src = data[1].url
    }
}

async function loadFavoritesDogs(){
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json()
    console.log(data);
}


loadRandomDogs()