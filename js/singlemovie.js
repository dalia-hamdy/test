const moviesslog=location.search
console.log(moviesslog)

const getQuerySlug = new URLSearchParams(location.search)
const slugPrams = getQuerySlug.get("slug")
document.title = slugPrams


async function getsinglemovie() {

    const data = await fetch(`http://localhost:3000/movies?slug=${slugPrams}`)
    const result =await data.json() ;
    displaysinglemovie(result[0]) ;
    dispalyvideo(result[0]) ;

}
getsinglemovie()

function  displaysinglemovie(data){

    let temp =`        <div class="movie-text">
<h2>${data.title}</h2>
<p>${data.director}</p>
<div class="single-btn">
    <a href="#sing_movie_video">watch now</a>
</div>

</div>

<img src="${data.poster}" alt="">
`
document.querySelector(".movie-bannar").innerHTML=temp
}

function dispalyvideo(data){
    document.querySelector("#banner").innerHTML=`    <video src="${data.url}" controls></video>
`

}

